import express from 'express';
import multer from 'multer';
import EquipamentosController from './controller/EquipamentosController';
import cors from 'cors';

const controller = new EquipamentosController();
const app = express();
const storage = multer.memoryStorage();
const upload = multer({
  storage, fileFilter: (req, file, cb) => {
    if (file.mimetype === 'text/csv') {
      cb(null, true);
    } 
    else {
      const newLocal = 'Tipo de arquivo inválido.';
      cb(new Error(newLocal));
    }
  }
});

app.use(express.json());
app.use(cors());

app.get('/equipamentos', async (req, res) => {
  const equipamentos = await controller.getEquipamentos();
  await res.json({equipamentos});
});

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ isValid: false, message: 'Nenhum arquivo foi enviado.' });
      return null;
    }
    const convertUTF8 = req.file.buffer.toString('utf-8');
    const result = await controller.postFile(convertUTF8);
    res.status(200).json(result);
    
  } 
  catch (error: any) {
    res.status(500).json({ isValid: false, message: error.message });
  }
});

app.listen(3001, () =>
  console.log('REST API server ready at: http://localhost:3001'),
);
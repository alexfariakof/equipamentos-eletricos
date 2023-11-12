import express from 'express';
import multer from 'multer';
import EquipamentosController from './controller/EquipamentosController';
import { Prisma } from './prisma/client';


const controller = new EquipamentosController();
const app = express();
app.use(express.json());

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
app.get('/equipamentos', async (req, res) => {
  const equipamentos = await controller.getEquipamentos();
  res.json(equipamentos);
});

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ isValid: false, message: 'Nenhum arquivo foi enviado.' });
    }

    const convertFile = new File([req.file.buffer], req.file.originalname, { type: req.file.mimetype, lastModified: Date.now() });
    const convertUTF8 = req.file.buffer.toString('utf-8');
    const result = await controller.postFile(convertUTF8);
    return res.json(result);
  } 
  catch (error: any) {
    return res.status(500).json({ isValid: false, message: error.message });
  }
});


app.listen(3001, () =>
  console.log('REST API server ready at: http://localhost:3001'),
);
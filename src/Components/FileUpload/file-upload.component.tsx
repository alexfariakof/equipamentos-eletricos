import React, { ChangeEvent, useState } from "react";


const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Por favor, selecione um arquivo CSV.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    try {
      // Enviar o arquivo para o servidor (Node.js)
      //await axios.post("http://localhost:3001/upload", formData);
      // Limpar o estado do arquivo após o upload bem-sucedido
      setFile(null);
      alert("Upload bem-sucedido!");
    } catch (error) {      
      alert("Erro ao fazer upload.");
    }
  };

  return (
    <div className="container mt-5 d-flex flex-row ju  ">
      <div className="form-group justify-content-start">
        <input data-testid="fileUpload" className="form-control" type="file" id="formFile" accept=".csv" onChange={handleFileChange} />
      </div>
      <div className="form-group m-2 mt-0" >
        <button data-testid="btnValidar" className="btn btn-primary" onClick={handleUpload} >Validar</button>
      </div>
    </div>
  );
};

export default FileUpload;

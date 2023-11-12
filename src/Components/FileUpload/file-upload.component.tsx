import React, { ChangeEvent, useState } from "react";
import FileImportController from "../../Controller/file-import.controller";

const FileUpload: React.FC = () => {  
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    let controller = new FileImportController();
    if (!file) {
      alert("Por favor, selecione um arquivo CSV.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    try {

      const result = controller.postFileToValidate(file) as any;
      
      if ((await result).message === true) {
        alert("Upload bem-sucedido!");
      } 
      else {
        alert((await result).message);
      }
    } catch (error: any) {      
      alert("Erro ao fazer upload: " + error.message);
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

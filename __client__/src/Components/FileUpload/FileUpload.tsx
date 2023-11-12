import axios from "axios";
import React, { ChangeEvent, useState } from "react";

axios.interceptors.response.use(response => {
  console.log(response);
  // Edit response config
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.request.use(request => {
  console.log(request);
  // Edit request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload =() => {
    if (!file) {
      alert("Por favor, selecione um arquivo CSV.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    try {
       axios.post("http://localhost:3001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }).then( response => {
        if (response.data.isValid === true) {
          alert("Upload bem-sucedido!");
        } else {
          alert(response.data.message);
        }      })
      .catch((error) => {
        alert("Erro ao fazer upload: " + error.message);
      });     
    } catch (error: any) {
      alert("Erro ao fazer upload: " + error.message);
    }
  };

  return (
    <div className="container mt-5 d-flex flex-row ju  " >
      <div className="form-group justify-content-start">
        <input
          data-testid="fileUpload"
          className="form-control"
          type="file"
          id="formFile"
          accept=".csv"
          onChange={handleFileChange}
        />
      </div>
      <div className="form-group m-2 mt-0">
        <button
          data-testid="btnValidar"
          className="btn btn-primary"
          onClick={handleUpload}
        >
          Validar
        </button>
      </div>
    </div>
  );
};

export default FileUpload;

import TopologyValidationBussiness from '../Bussiness/TopologyValidationBussiness';
import { ITopologyValidation } from '../Domain';
import FileParserService from '../Services/FileParserService';

class FileUploadController  {

   postFileToValidate = async (file: File) : Promise<ITopologyValidation> => {  
    try {
      
      const fileContent = await this.readFileAsync(file);
      const parsedData = FileParserService.parseFile(fileContent);
      // Validar topologia
      return TopologyValidationBussiness.validateTopology(parsedData);

    } catch (error: any) {

      return { status: false, message: error.message };
    }
  }

  private readFileAsync(file: File): Promise<String> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          resolve(event.target.result as String);
        } else {
          reject(new Error('Erro ao ler o conteúdo do arquivo.'));
        }
      };
      reader.onerror = (event) => {
        reject(new Error('Erro ao ler o conteúdo do arquivo.'));
      };
      reader.readAsText(file);
    });  
  }
}
export default FileUploadController;

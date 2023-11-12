import TopologyValidationBussiness from '../Bussiness/topology-validation.bussiness';
import FileParserService from '../Services/file-parser.service';

class FileImportController  {

   postFileToValidate = async (file: File) : Promise<{ message: string | boolean; }> => {  
    try {
      
      const fileContent = await this.readFileAsync(file);
      const parsedData = FileParserService.parseFile(fileContent);
      // Validar topologia
      const validationResult = TopologyValidationBussiness.validateTopology(parsedData);
      if (validationResult.status === true){
        return { message: validationResult.status };
      }
      else{
        return { message: validationResult.message };
      }
        

    } catch (error: any) {

      return { message: error.message };
    }
  }

  private readFileAsync(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          resolve(event.target.result as string);
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
export default FileImportController;

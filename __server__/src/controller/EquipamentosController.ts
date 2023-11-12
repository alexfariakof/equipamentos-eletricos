import EquipamentosBusiness from "../bussiness/EquipamentosBussiness";
import { ITopologyValidation } from "../interfaces/ITopologyValidation";
import { Equipamentos } from "../prisma/client";
import EquipamentosParserService from "../services/EquipamentosParserService";

class EquipamentosController  {
  equipamentosBusiness: EquipamentosBusiness;

  constructor() {
    this.equipamentosBusiness = new EquipamentosBusiness();
  }

  postFile = async (fileContent: String) : Promise<ITopologyValidation> => {  
    try {
      
      //const fileContent = await this.readFileAsync(file);
      const parsedData = EquipamentosParserService.parseFileToArray(fileContent);
      
      // Validar topologia
      const validateTopology = this.equipamentosBusiness.validateTopology(parsedData);

      if (validateTopology.isValid === true){
        const parseEquipamentos = EquipamentosParserService.parseFileToEquipamentos(fileContent);
        parseEquipamentos.forEach((equipamento => {
            this.equipamentosBusiness.createEquipamentos({ 
            tipo: equipamento.tipo,
            idBarra: equipamento.idBarra,
            barraDe: equipamento.barraDe,
            barraPara: equipamento.barraPara,
            idLinha: equipamento.idLinha
          });

        }));        
      }

      return validateTopology;

    } catch (error: any) {

      return { isValid: false, message: error.message };
    }
  }

  getEquipamentos = async () : Promise<Equipamentos[]> => { 
    try {
            
      return this.equipamentosBusiness.listEquipamentos();

    } catch (error) {

      throw error;
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
export default EquipamentosController;

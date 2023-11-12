import Bar from "../interfaces/IBar";
import Line from "../interfaces/ILine";
import ShuntBar from "../interfaces/IShuntBar";
import ShuntLine from "../interfaces/IShuntLine";
import { ITopologyValidation } from "../interfaces/ITopologyValidation";
import { Equipamentos } from "../prisma/client";
import { EquipamentosRepository } from "../repositories/EquipamentosRepository";

class EquipamentosBusiness {
  equipmentRepository: EquipamentosRepository;

  constructor() {
    this.equipmentRepository = new EquipamentosRepository();
  }

  createEquipamentos(EquipamentosData: { tipo: string; idBarra: number; barraDe?: number | null ; barraPara?: number | null; idLinha?: number | null }) : any {    
    this.equipmentRepository.createEquipamentos(EquipamentosData).then((result:any) =>{
      if (result instanceof Error)
        return { isVlid: false, message: 'Erro na inclusão de equipamentos.'};

      return { isValid: true, message: 'Upload bem-sucedido!' };
    });
  }

  listEquipamentos(): Promise<Equipamentos[]> {
    return this.equipmentRepository.getEquipamentos();
  }

  validateTopology(data: any[]): ITopologyValidation {
    const bars: Bar[] = [];
    const lines: Line[] = [];
    const shuntBars: ShuntBar[] = [];
    const shuntLines: ShuntLine[] = [];
    let topologyValidation :ITopologyValidation;
    
    data.forEach((item) => {

      // Lógica de validação da topologia (exemplo: garantir unicidade de barras)
      const barNumbers = bars.map((obj:any) => obj.bar.getId());
      const uniqueBarNumbers = [...new Set(barNumbers)];

      if (barNumbers.length !== uniqueBarNumbers.length) {
        topologyValidation = { isValid: false, message: 'Erro: Números de barras duplicados encontrados.' };
        throw(topologyValidation);          
      }

      if (item.bar) {
        bars.push(item);
      } else if (item.line) {
        const barraDe = bars.find((obj:any) => obj.bar.getId() === item.line.getBarraDe().getId());
        const barraPara = bars.find((obj:any) => obj.bar.getId() === item.line.getBarraPara().getId());
    
        if (!barraDe || !barraPara) {
          topologyValidation = { isValid: false, message: 'Erro: Barras não encontradas para criar a Linha.' };
          throw(topologyValidation);          
        }
    
        lines.push(new Line(barraDe, barraPara, item.line.getId()));

      } else if (item.shuntBar) {
        const barraSB = bars.find((obj:any) => obj.bar.getId() === item.shuntBar.getBarra().getId());
    
        if (!barraSB) {
          topologyValidation = { isValid: false, message: 'Erro: Barra não encontrada para criar o Shunt de Barra.' };
          throw(topologyValidation);
        }
    
        shuntBars.push(new ShuntBar(barraSB, item.shuntBar.getId()));

      } else if (item.shuntLine) {
        const barraDeSL = bars.find((obj:any) => obj.bar.getId() === item.shuntLine.getBarraDe().getId());
        const barraParaSL = bars.find((obj:any) => obj.bar.getId() === item.shuntLine.getBarraPara().getId());
    
        if (!barraDeSL || !barraParaSL) {
          topologyValidation = { isValid: false, message: 'Erro: Barras não encontradas para criar o Shunt de Linha.' };
          throw(topologyValidation);
        }
    
        shuntLines.push(new ShuntLine(barraDeSL, barraParaSL, item.shuntLine.getIdLinha(), item.shuntLine.getId()));

      } else {
        topologyValidation = { isValid: false, message: 'Erro: Tipo de equipamento desconhecido.' };   
        throw(topologyValidation);
      }

    });

    return { isValid: true, message: 'Nenhum erro encontrado na topologia.' };
  }
}

export default EquipamentosBusiness;

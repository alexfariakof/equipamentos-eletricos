import Bar from "../Domain/Entities/Bar";
import Line from "../Domain/Entities/Line";
import ShuntBar from "../Domain/Entities/ShuntBar";
import ShuntLine from "../Domain/Entities/ShuntLine";

class TopologyValidationBussiness {
  static validateTopology(data: any[]): { status: boolean, message: string } {
    const bars: Bar[] = [];
    const lines: Line[] = [];
    const shuntBars: ShuntBar[] = [];
    const shuntLines: ShuntLine[] = [];
    let error = {};
    
    data.forEach((item) => {

      // Lógica de validação da topologia (exemplo: garantir unicidade de barras)
      const barNumbers = bars.map((obj:any) => obj.bar.getId());
      const uniqueBarNumbers = [...new Set(barNumbers)];

      if (barNumbers.length !== uniqueBarNumbers.length) {
        error = { status: false, message: 'Erro: Números de barras duplicados encontrados.' };
        throw(error);          
      }

      if (item.bar) {
        bars.push(item);
      } else if (item.line) {
        const barraDe = bars.find((obj:any) => obj.bar.getId() === item.line.getBarraDe().getId());
        const barraPara = bars.find((obj:any) => obj.bar.getId() === item.line.getBarraPara().getId());
    
        if (!barraDe || !barraPara) {
          error = { status: false, message: 'Erro: Barras não encontradas para criar a Linha.' };
          throw(error);          
        }
    
        lines.push(new Line(barraDe, barraPara, item.line.getId()));

      } else if (item.shuntBar) {
        const barraSB = bars.find((obj:any) => obj.bar.getId() === item.shuntBar.getBarra().getId());
    
        if (!barraSB) {
          error = { status: false, message: 'Erro: Barra não encontrada para criar o Shunt de Barra.' };
          throw(error);
        }
    
        shuntBars.push(new ShuntBar(barraSB, item.shuntBar.getId()));

      } else if (item.shuntLine) {
        const barraDeSL = bars.find((obj:any) => obj.bar.getId() === item.shuntLine.getBarraDe().getId());
        const barraParaSL = bars.find((obj:any) => obj.bar.getId() === item.shuntLine.getBarraPara().getId());
    
        if (!barraDeSL || !barraParaSL) {
          error = { status: false, message: 'Erro: Barras não encontradas para criar o Shunt de Linha.' };
          throw(error);
        }
    
        shuntLines.push(new ShuntLine(barraDeSL, barraParaSL, item.shuntLine.getIdLinha(), item.shuntLine.getId()));

      } else {
        error = { status: false, message: 'Erro: Tipo de equipamento desconhecido.' };   
        throw(error);
      }

    });
    



    // Retorna true caso não haja erros
    return { status: true, message: 'Nenhum erro encontrado na topologia.' };
  }
}

export default TopologyValidationBussiness;

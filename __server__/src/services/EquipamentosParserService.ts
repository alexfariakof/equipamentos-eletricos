import Bar from "../interfaces/IBar";
import Line from "../interfaces/ILine";
import ShuntBar from "../interfaces/IShuntBar";
import ShuntLine from "../interfaces/IShuntLine";
import { Equipamentos } from "../prisma/client";

class EquipamentosParserService {

  static parseFileToArray(fileContent: String): any[] {
    const lines = fileContent.split("\n");
    const parsedData: any[] = [];

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      if (trimmedLine) {
        const [type, ...data] = trimmedLine
          .split(",")
          .map((part) => part.trim());

        if (type && data.length > 0) {
          const parsedItem: any = {};

          switch (type) {
            case "B":
              parsedItem.bar = new Bar(parseInt(data[0], 10));
              break;
            case "L":
              parsedItem.line = new Line(
                new Bar(parseInt(data[0], 10)),
                new Bar(parseInt(data[1], 10)),
                parseInt(data[2], 10)
              );
              break;
            case "SL":
              parsedItem.shuntLine = new ShuntLine(
                new Bar(parseInt(data[0], 10)),
                new Bar(parseInt(data[1], 10)),
                parseInt(data[2], 10),
                parseInt(data[3], 10)
              );
              break;
            case "SB":
              parsedItem.shuntBar = new ShuntBar(
                new Bar(parseInt(data[0], 10)),
                parseInt(data[1], 10)
              );
              break;
            default:
              throw new Error(`Tipo desconhecido: ${type}`);
          }

          parsedData.push(parsedItem);
        }
      }
    });

    return parsedData;
  }

  static parseFileToEquipamentos(fileContent: String): Equipamentos[] {
    const lines = fileContent.split("\n");
    const parsedEquipamentoss: Equipamentos[] = [];

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      if (trimmedLine) {
        const [tipo, ...data] = trimmedLine.split(",").map((part) => part.trim());

        if (tipo && data.length > 0) {
          const parsedEquipamentos: Equipamentos = {
            id: 0,
            tipo,
            idBarra: parseInt(data[0], 10),
            barraDe: data.length > 1 ? parseInt(data[1], 10) : null,
            barraPara: data.length > 2 ? parseInt(data[2], 10) : null,
            idLinha: data.length > 3 ? parseInt(data[3], 10) : null,
          };

          parsedEquipamentoss.push(parsedEquipamentos);
        }
      }
    });

    return parsedEquipamentoss;
  }
}

export default EquipamentosParserService;

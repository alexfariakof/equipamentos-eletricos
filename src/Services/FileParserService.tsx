import Bar from "../Domain/Entities/Bar";
import Line from "../Domain/Entities/Line";
import ShuntBar from "../Domain/Entities/ShuntBar";
import ShuntLine from "../Domain/Entities/ShuntLine";
import { Equipment } from "../Prisma/client";

class FileParserService {

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

  static parseFileToEquipments(fileContent: String): Equipment[] {
    const lines = fileContent.split("\n");
    const parsedEquipments: Equipment[] = [];

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      if (trimmedLine) {
        const [type, ...data] = trimmedLine.split(",").map((part) => part.trim());

        if (type && data.length > 0) {
          const parsedEquipment: Equipment = {
            id: 0,
            type,
            idBarra: parseInt(data[0], 10),
            barraDe: data.length > 1 ? parseInt(data[1], 10) : null,
            barraPara: data.length > 2 ? parseInt(data[2], 10) : null,
            idLinha: data.length > 3 ? parseInt(data[3], 10) : null,
          };

          parsedEquipments.push(parsedEquipment);
        }
      }
    });

    return parsedEquipments;
  }
}

export default FileParserService;

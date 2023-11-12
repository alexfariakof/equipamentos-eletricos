import Bar from "../Domain/Entities/Bar";
import Line from "../Domain/Entities/Line";
import ShuntBar from "../Domain/Entities/ShuntBar";
import ShuntLine from "../Domain/Entities/ShuntLine";

class FileParserService {
  static parseFile(fileContent: string): any[] {
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
}

export default FileParserService;

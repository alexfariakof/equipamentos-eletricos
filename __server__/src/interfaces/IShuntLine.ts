import Bar from "./IBar";

class ShuntLine {
  private barraDe: Bar;
  private barraPara: Bar;
  private idLinha: number;
  private id: number;

  constructor(barraDe: Bar, barraPara: Bar, idLinha: number, id: number) {
    this.barraDe = barraDe;
    this.barraPara = barraPara;
    this.idLinha = idLinha;
    this.id = id;
  }

  getBarraDe(): Bar {
    return this.barraDe;
  }

  getBarraPara(): Bar {
    return this.barraPara;
  }

  getIdLinha(): number {
    return this.idLinha;
  }

  getId(): number {
    return this.id;
  }
}

export default ShuntLine;

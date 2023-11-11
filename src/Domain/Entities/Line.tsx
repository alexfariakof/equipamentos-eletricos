import Bar from "./Bar";

class Line {
  private barraDe: Bar;
  private barraPara: Bar;
  private id: number;

  constructor(barraDe: Bar, barraPara: Bar, id: number) {
    this.barraDe = barraDe;
    this.barraPara = barraPara;
    this.id = id;
  }

  getBarraDe(): Bar {
    return this.barraDe;
  }

  getBarraPara(): Bar {
    return this.barraPara;
  }

  getId(): number {
    return this.id;
  }
}

export default Line;

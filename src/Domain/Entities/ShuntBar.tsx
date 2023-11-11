import Bar from "./Bar";

class ShuntBar {
  private barra: Bar;
  private id: number;

  constructor(barra: Bar, id: number) {
    this.barra = barra;
    this.id = id;
  }

  getBarra(): Bar {
    return this.barra;
  }

  getId(): number {
    return this.id;
  }
}

export default ShuntBar;

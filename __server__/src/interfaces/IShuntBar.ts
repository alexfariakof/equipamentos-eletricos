import Bar from "./IBar";

class ShuntBar {
  private bar: Bar;
  private id: number;

  constructor(_bar: Bar, id: number) {
    this.bar = _bar;
    this.id = id;
  }

  getBarra(): Bar {
    return this.bar;
  }

  getId(): number {
    return this.id;
  }
}

export default ShuntBar;

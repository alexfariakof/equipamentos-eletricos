import Bar from "../../../../src/Domain/Entities/Bar";
import ShuntLine from "../../../../src/Domain/Entities/ShuntLine";

describe("Unit Test ShuntLine", () => {

  test("should create a ShuntLine instance", () => {
    // Arrange & Anct
    const bar1 = new Bar(1);
    const bar2 = new Bar(2);
    const shuntLine = new ShuntLine(bar1, bar2, 1, 2);

    // Assert
    expect(shuntLine.getBarraDe()).toBe(bar1);
    expect(shuntLine.getBarraPara()).toBe(bar2);
    expect(shuntLine.getIdLinha()).toBe(1);
    expect(shuntLine.getId()).toBe(2);
  });
});

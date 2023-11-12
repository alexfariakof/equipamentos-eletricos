import Bar from "../../../../src/Domain/Entities/Bar";
import Line from "../../../../src/Domain/Entities/Line";

describe("Unit Test Line Entity", () => {
  
  test("Should Create a Line Instance", () => {
    // Arrange & Act
    const bar1 = new Bar(1);
    const bar2 = new Bar(2);
    const line = new Line(bar1, bar2, 1);

    // Assert
    expect(line.getBarraDe()).toBe(bar1);
    expect(line.getBarraPara()).toBe(bar2);
    expect(line.getId()).toBe(1);
  });
});

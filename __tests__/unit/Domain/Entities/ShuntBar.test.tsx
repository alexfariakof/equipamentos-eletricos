import Bar from "../../../../src/Domain/Entities/Bar";
import ShuntBar from "../../../../src/Domain/Entities/ShuntBar";

describe("Unit Test ShuntBar", () => {
  
    test("Should Create a ShuntBar Instance", () => {
    // Arrange & Act
    const bar = new Bar(1);
    const shuntBar = new ShuntBar(bar, 1);

    // Assert
    expect(shuntBar.getBarra()).toBe(bar);
    expect(shuntBar.getId()).toBe(1);
  });
});

import Bar from "../../../../src/Domain/Entities/Bar";

describe("Unit Test Bar Entity", () => {

  test("should create a Bar instance", () => {
    // Arrange & Act
    const bar = new Bar(1);

    // Assert
    expect(bar.getId()).toBe(1);
  });
});

import Bar from "../../../../src/Domain/Entities/Bar";

describe("Unit Test Bar Entity", () => {

  test("Should Create a Bar Instance", () => {
    // Arrange & Act
    const bar = new Bar(1);

    // Assert
    expect(bar.getId()).toBe(1);
  });
});

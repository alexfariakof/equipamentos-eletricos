import Bar from "../../../__server__/src/interfaces/IBar";

describe("Unit Test Bar Entity", () => {

  test("Should Create a Bar Instance", () => {
    // Arrange & Act
    const bar = new Bar(1);

    // Assert
    expect(bar.getId()).toBe(1);
  });
});

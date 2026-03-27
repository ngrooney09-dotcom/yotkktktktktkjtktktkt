// Test suite for addition function

const { addition } = require("./addition");

describe("Addition Function Tests", () => {

  test("adds two positive numbers", () => {
    expect(addition(2, 4)).toBe(6);
  });

  test("adds positive and negative number", () => {
    expect(addition(5, -3)).toBe(2);
  });

  test("adds two negative numbers", () => {
    expect(addition(-4, -6)).toBe(-10);
  });

  test("adds zero correctly", () => {
    expect(addition(0, 5)).toBe(5);
  });

  test("adds decimals", () => {
    expect(addition(2.5, 1.5)).toBe(4);
  });

  test.each([
    [1, 2, 3],
    [10, 5, 15],
    [-3, 3, 0],
    [100, 200, 300]
  ])("adds %i + %i = %i", (a, b, expected) => {
    expect(addition(a, b)).toBe(expected);
  });

});
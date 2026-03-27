const { reverseString } = require("./reverse");

describe("String Reverser Tests", () => {

  test("reverses a normal word", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverses a sentence", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  test("reverses with numbers", () => {
    expect(reverseString("12345")).toBe("54321");
  });

  test("empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("single character", () => {
    expect(reverseString("a")).toBe("a");
  });

  test.each([
    ["abc", "cba"],
    ["racecar", "racecar"],
    ["JavaScript", "tpircSavaJ"]
  ])("reverse %s → %s", (input, expected) => {
    expect(reverseString(input)).toBe(expected);
  });

});
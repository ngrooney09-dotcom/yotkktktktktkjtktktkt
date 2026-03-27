const { isPalindrome } = require("./palindrome");

describe("Palindrome Tests", () => {

  test("racecar is palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("hello is not palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("case insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  test("ignores spaces", () => {
    expect(isPalindrome("nurses run")).toBe(true);
  });

  test("ignores punctuation", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  test("numbers palindrome", () => {
    expect(isPalindrome("12321")).toBe(true);
  });

  test("empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

});
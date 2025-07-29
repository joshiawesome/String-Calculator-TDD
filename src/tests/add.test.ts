import StringCalculator from "../calculate";

describe("Add Method", () => {
  it("should return 0 when the input is empty", () => {
    expect(StringCalculator.add("")).toBe(0);
  });

  it("should return the number when the input is a single number", () => {
    expect(StringCalculator.add("1")).toBe(1);
  });

  it("should return the sum of the numbers when the input is a list of numbers", () => {
    expect(StringCalculator.add("1,2")).toBe(3);
  });

  it("should handle new lines between numbers", () => {
    expect(StringCalculator.add("1\n2,3")).toBe(6);
  });

  it("should support custom delimiters", () => {
    expect(StringCalculator.add("//%\n1%2")).toBe(3);
  });

  test("Add throws exception for negative numbers", () => {
    expect(() => StringCalculator.add("1,-2,3,-4")).toThrow(
      "negatives not allowed: -2,-4"
    );
  });

  it("should allow multiple delimiters like //[delim1][delim2]\\n", () => {
    expect(StringCalculator.add("//[*][%]\n1*2%3")).toBe(6);
  });

  it("should allow delimiters of any length with //[delimiter]\\n format", () => {
    expect(StringCalculator.add("//[***]\n1***2***3")).toBe(6);
  });

  it("should allow multiple delimiters of any length", () => {
    expect(StringCalculator.add("//[**][%%]\n1**2%%3")).toBe(6);
  });

  it("should ignore numbers bigger than 1000", () => {
    expect(StringCalculator.add("2,1001")).toBe(2);
  });
});

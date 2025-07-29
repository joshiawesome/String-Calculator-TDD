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
});

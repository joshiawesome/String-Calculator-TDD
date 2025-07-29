import StringCalculator from "../calculate";

describe("Add Method", () => {
  it("should return 0 when the input is empty", () => {
    expect(StringCalculator.add("")).toBe(0);
  });
});

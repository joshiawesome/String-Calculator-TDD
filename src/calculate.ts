class StringCalculator {
  public static add(numbers: string) {
    if (!numbers.length) return 0;

    const numArray = numbers.split(",").map(Number);

    if (numArray.length === 1) return numArray[0];
  }
}

export default StringCalculator;

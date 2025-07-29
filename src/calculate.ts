class StringCalculator {
  public static add(numbers: string) {
    if (!numbers.length) return 0;

    const numArray = numbers.split(/,|\n/).map(Number);

    if (numArray.length === 1) return numArray[0];

    return numArray.reduce((a, b) => a + b);
  }
}

export default StringCalculator;

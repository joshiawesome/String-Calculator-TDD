class StringCalculator {
  public static add(numbers: string) {
    if (!numbers.length) return 0;

    let delimiter = /,|\n/;
    let numString = numbers;

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
      if (delimiterMatch) {
        delimiter = new RegExp(delimiterMatch[1]);
        numString = numbers.slice(delimiterMatch[0].length);
      }
    }

    const numArray = numString.split(delimiter).map(Number);

    if (numArray.length === 1) return numArray[0];

    const negatives = numArray.filter((n) => n < 0);

    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }

    return numArray.reduce((a, b) => a + b);
  }
}

export default StringCalculator;

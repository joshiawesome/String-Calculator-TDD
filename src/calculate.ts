class StringCalculator {
  public static add(numbers: string) {
    if (!numbers.length) return 0;

    let delimiter = /,|\n/;
    let numString = numbers;

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.+)\n/);

      if (delimiterMatch) {
        const delimiterSection = delimiterMatch[1];

        const delimiters = Array.from(
          delimiterSection.matchAll(/\[(.*?)\]/g)
        ).map((match) => match[1]);

        if (delimiters.length > 0) {
          const escapedDelimiters = delimiters.map((d) =>
            d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
          );
          delimiter = new RegExp(escapedDelimiters.join("|"));
        } else {
          delimiter = new RegExp(delimiterSection);
        }

        numString = numbers.slice(delimiterMatch[0].length);
      }
    }

    const numArray = numString
      .split(delimiter)
      .map(Number)
      .filter((n) => n <= 1000);

    if (numArray.length === 1) return numArray[0];

    const negatives = numArray.filter((n) => n < 0);

    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }

    return numArray.reduce((a, b) => a + b);
  }
}

export default StringCalculator;

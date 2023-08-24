function solution(numbers) {
    const positiveNumbers = [];
    const negativeNumbers = [];

    for (const num of numbers) {
        if (num >= 0) {
            positiveNumbers.push(num);
        } else {
            negativeNumbers.push(num);
        }
    }

    positiveNumbers.sort((a, b) => b - a); 
    negativeNumbers.sort((a, b) => a - b); 

    let maxProduct = -Infinity;

    if (positiveNumbers.length >= 2) {
        maxProduct = Math.max(maxProduct, positiveNumbers[0] * positiveNumbers[1]);
    }

    if (negativeNumbers.length >= 2) {
        maxProduct = Math.max(maxProduct, negativeNumbers[0] * negativeNumbers[1]);
    }

    if (positiveNumbers.length >= 1 && negativeNumbers.length >= 1) {
        maxProduct = Math.max(maxProduct, positiveNumbers[0] * negativeNumbers[0]);
    }

    return maxProduct;
}

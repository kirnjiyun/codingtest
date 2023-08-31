function solution(array) {
    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        const digitString = String(array[i]);
        for (let j = 0; j < digitString.length; j++) {
            if (digitString[j] === '7') {
                totalSum++;
            }
        }
    }
    return totalSum;
}
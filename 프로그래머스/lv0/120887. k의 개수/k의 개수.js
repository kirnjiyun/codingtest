function countOccurrences(number, target) {
    let count = 0;
    while (number > 0) { const digit = number % 10;
                        if (digit === target) { count++;}
        number = Math.floor(number / 10);
    }
    return count;
}

function solution(i, j, k) {
    let total_count = 0;
    for (let num = i; num <= j; num++) {
        total_count += countOccurrences(num, k);
    }
    return total_count;
}


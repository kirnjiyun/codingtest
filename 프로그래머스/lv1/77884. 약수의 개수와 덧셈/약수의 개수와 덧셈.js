function countDivisors(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    return count;
}
function solution(left, right) {
    let result = 0;

    for (let num = left; num <= right; num++) {

        const divisorsCount = countDivisors(num);


        if (divisorsCount % 2 === 0) {
            result += num;
        } else {
            result -= num;
        }
    }

    return result;
}


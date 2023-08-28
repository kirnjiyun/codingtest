function solution(n) {
    var sum = 0;

    if (n % 2 !== 0) {
        for (let i = 1; i <= n; i += 2) {
            sum += i;
        }
    } else {

        for (let i = 2; i <= n; i += 2) {
            sum += i * i;
        }
    }

    return sum;
}

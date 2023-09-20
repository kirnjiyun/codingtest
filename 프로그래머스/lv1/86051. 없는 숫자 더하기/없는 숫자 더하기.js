function solution(numbers) {
    var answer = 45;
    let minus = numbers.reduce((a, c) => a + c, 0);
    return answer - minus;
}

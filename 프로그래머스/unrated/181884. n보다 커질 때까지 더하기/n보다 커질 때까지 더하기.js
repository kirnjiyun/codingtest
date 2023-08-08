function solution(numbers, n) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (sum <= n) {
            answer = sum+numbers[i+1]
        }
        else{return answer=sum}
    }
    return answer;
}
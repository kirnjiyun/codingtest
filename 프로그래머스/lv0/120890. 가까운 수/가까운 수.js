function solution(array, n) {
    array.sort((a, b) => a - b);
    let answer = 0;
    let com = n + 100;
    
    for (let i of array) {
        if (Math.abs(i - n) < com) {
            com = Math.abs(i - n);
            answer = i;
        }
    }
    
    return answer;
}


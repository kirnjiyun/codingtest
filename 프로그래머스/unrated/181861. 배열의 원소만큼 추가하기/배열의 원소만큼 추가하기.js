function solution(arr) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
            const num = Number(arr[i]);
            for (let j = 0; j < num; j++) {
                answer.push(num);
            
        }
    }
    return answer;
}

function solution(k, score) {
    var answer = [];
    let result = [];
    for(let i = 0; i<score.length; i++){
        if(i<k){result.push(score[i])}
        if(score[i]>Math.min(...result)){
            result.pop()
            result.push(score[i])
            result.sort((a,b)=>b-a) 
        }
        answer.push(result.at(-1))
    }
    
    return answer;
}
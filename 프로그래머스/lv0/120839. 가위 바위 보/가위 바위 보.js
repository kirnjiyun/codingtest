function solution(rsp) {
    var answer = '';
    
    for(let i = 0; i < rsp.length; i++) {
        let char = rsp.charAt(i);
        if(char === "2") {
            answer += "0";
        }
        else if(char === "0") {
            answer += "5";
        }
        else if(char === "5") {
            answer += "2";
        }
    }
    
    return answer;
}
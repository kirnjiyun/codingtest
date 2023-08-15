function solution(num_list) {
    var answer = 0;
    if(num_list.length >= 11){
        for (let n = 0; n < num_list.length; n++) {
        answer += num_list[n];}
        return answer;
    } 
    else {
        let multipliedAnswer = 1;
        for (let n = 0; n < num_list.length; n++) {
            multipliedAnswer *= num_list[n];
        }
        return multipliedAnswer;
    }
}

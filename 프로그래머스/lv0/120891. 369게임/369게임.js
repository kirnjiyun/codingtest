function solution(order) {
    var answer = 0;
        if (typeof order !== "string") {
        order = order.toString();
        }
    for(let i = 0; i<order.length; i++){
    if(parseInt(order[i])/3==1){
        answer+=1}
    if(parseInt(order[i])/6==1){
        answer+=1}
    if(parseInt(order[i])/9==1){
        answer+=1}
}
    return answer
    ;
}

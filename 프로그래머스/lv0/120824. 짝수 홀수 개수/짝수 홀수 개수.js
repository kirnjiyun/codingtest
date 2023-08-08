function solution(num_list) {
    
    let sumeven=0;
    let sumodd=0;
    
    for(let i= 0; i<num_list.length; i++){
    if(num_list[i]%2===0){sumeven+=1}
    else{sumodd+=1}}
    let answer=[sumeven,sumodd]
    return answer;
}
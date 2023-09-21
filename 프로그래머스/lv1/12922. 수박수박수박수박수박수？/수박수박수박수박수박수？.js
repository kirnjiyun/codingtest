function solution(n) {
    var answer = '';
    let a ='수'
    let b ='박'
    for(let i =0; i<n; i++){
        if(i%2===0){answer+=a}
                 else{answer+=b}
    }
    
    return answer;
}
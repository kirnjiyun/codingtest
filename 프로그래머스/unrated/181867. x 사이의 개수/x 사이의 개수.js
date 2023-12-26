function solution(myString) {
    var answer = [];
     let a = myString.split("x")
    let b =a.map((x)=>x.length)
    return b
}
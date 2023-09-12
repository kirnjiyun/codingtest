function solution(n) {
    let answer = n.toString().split("").map(Number).sort((a, b) => b-a).join("")
    return Number(answer);
}

function solution(a, b) {
    let first = String(a) + String(b);
    let second = String(b) + String(a);
    let compare = [first, second].sort((a, b) => (b - a));
    let answer = Number(compare[0]);

    if (first === second) {
        return Number(first);
    } else {
        return answer;
    }
}

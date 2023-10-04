function solution(t, p) {
    let answer = 0;
    const leng = p.length;

    for (let i = 0; i <= t.length - leng; i++) {
        const substring = t.slice(i, i + leng);
        if (substring <= p) {
            answer += 1;
        }
    }

    return answer;
}

function solution(s) {
    let answer = '';

    if (s.length % 2 === 0) {
        const index = Math.floor(s.length / 2);
        answer = s.slice(index - 1, index + 1);
    } else {
        const index = Math.floor(s.length / 2);
        answer = s.charAt(index); 
    }

    return answer;
}

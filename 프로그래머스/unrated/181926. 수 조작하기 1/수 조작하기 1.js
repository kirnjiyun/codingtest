function solution(initialAnswer, control) {
    let answer = initialAnswer;
    const n = control.length; 

    for (let i = 0; i < n; i++) {
        switch (control[i]) {
            case 'w':
                answer += 1;
                break;
            case 's':
                answer -= 1;
                break;
            case 'd':
                answer += 10;
                break;
            case 'a':
                answer -= 10;
                break;
        }
    }

    return answer;
}

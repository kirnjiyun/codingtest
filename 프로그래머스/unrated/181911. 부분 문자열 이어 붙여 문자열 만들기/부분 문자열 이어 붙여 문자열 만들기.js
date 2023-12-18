function solution(my_strings, parts) {
    var answer = '';
    my_strings.forEach((string, i) => {
        let index = parts[i];
        let word = string.slice(index[0], index[1] + 1);
        answer += word;
    });
    return answer;
}

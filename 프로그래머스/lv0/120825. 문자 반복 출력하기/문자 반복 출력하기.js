function solution(my_string, n) {
    var answer = '';
    answer = my_string.split("").map(function(char) {
        return char.repeat(n);
    }).join("");
    return answer;
}

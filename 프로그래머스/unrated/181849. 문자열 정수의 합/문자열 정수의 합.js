function solution(num_str) {
    let result = 0;
    for (let n = 0; n < num_str.length; n++) {
        result += parseInt(num_str[n]);
    }
    return result;
}

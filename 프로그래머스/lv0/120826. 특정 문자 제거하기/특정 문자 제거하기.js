function solution(my_string, letter) {
    let result = my_string.split(letter).join('');
    
    return result;
}
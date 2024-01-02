function solution(n_str) {
    var answer = '';
    while (n_str[0] === '0') {
        n_str = n_str.substring(1); 
    }
    answer = n_str; 
  
    return answer;
}
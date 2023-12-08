function solution(num_list, n) {
    var answer = [];
    let front = num_list.slice(n)
    let back = num_list.slice(0,n)
    answer = front.concat(back)
    return answer;
}
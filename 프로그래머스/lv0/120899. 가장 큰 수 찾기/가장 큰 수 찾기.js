function solution(array) {
    let x = Math.max(...array);
    let y = array.indexOf(x);
    
    return [x, y];
}

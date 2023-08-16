function solution(num, k) {
    var numStr = num.toString();
    var index = numStr.indexOf(k.toString()); 
    if (index !== -1) {
        return index + 1; 
    } else {
        return -1;
    }
}

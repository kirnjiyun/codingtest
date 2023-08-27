function solution(my_string) {
    var sum = 0;
    var currentNum = 0;

    for (var i = 0; i < my_string.length; i++) {
        var char = my_string[i];

        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + parseInt(char);
        } else {
            sum += currentNum;
            currentNum = 0;
        }
    }

    sum += currentNum;
    return sum;
}

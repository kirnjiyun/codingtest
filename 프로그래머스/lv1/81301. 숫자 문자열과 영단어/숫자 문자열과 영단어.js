function solution(s) {
    var answer = s;

    let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    for (let n = 0; n < num.length; n++) {
        let numStr = num[n];
        let engWord = eng[n];

        while (answer.includes(engWord)) {
            answer = answer.replace(engWord, numStr);
        }
    }

    return parseInt(answer);
}


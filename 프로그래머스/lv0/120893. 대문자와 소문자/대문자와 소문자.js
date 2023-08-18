function solution(myString) {
    return myString
        .split("")
        .map(char => {
            if (char === char.toLowerCase()) {
                return char.toUpperCase();
            } else {
                return char.toLowerCase();
            }
        })
        .join("");
}

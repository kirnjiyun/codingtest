function solution(s) {
  
    let numP = 0;
    let numY = 0;

    s = s.toLowerCase();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'p') {
            numP += 1;
        } else if (s[i] === 'y') {
            numY += 1;
        }
    }

    return numP === numY;
}
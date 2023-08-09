function solution(age) {
    const digitToLetter = {
        0: 'a',
        1: 'b',
        2: 'c',
        3: 'd',
        4: 'e',
        5: 'f',
        6: 'g',
        7: 'h',
        8: 'i',
        9: 'j'
    };

    const ageString = age.toString();
    let answer = '';

    for (const digitChar of ageString) {
        const digit = parseInt(digitChar);
        if (isNaN(digit)) {

            answer += digitChar; 
        } else {
            answer += digitToLetter[digit];
        }
    }

    return answer;
}

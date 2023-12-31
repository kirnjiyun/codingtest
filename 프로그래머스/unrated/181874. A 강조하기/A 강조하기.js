function solution(myString) {
    let modifiedString = '';

    for (let i = 0; i < myString.length; i++) {
        if (myString[i] !== 'a') {
            modifiedString += myString[i].toLowerCase();
        } else {
            modifiedString += myString[i]; 
        }
    }

    return modifiedString.replace(/a/g, 'A');
}

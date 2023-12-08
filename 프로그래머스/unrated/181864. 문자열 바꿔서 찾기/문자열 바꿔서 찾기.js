function solution(myString, pat) {
    var answer = 0;
    myString = myString.split("")
let newString = "";

for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "A") {
        newString += "B";
    } else if (myString[i] === "B") {
        newString += "A";
    } else {
        newString += myString[i]; 
    }
}
    console.log(newString)
    if(newString.includes(pat)){return 1}
    else{return 0}

}
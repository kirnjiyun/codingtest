function solution(my_string) {
const numbers = my_string.split("").filter(my_string => !isNaN(my_string));
let sum = 0
    for(let i = 0; i<numbers.length; i++){
        sum += parseInt(numbers[i])
    }

    return sum
}

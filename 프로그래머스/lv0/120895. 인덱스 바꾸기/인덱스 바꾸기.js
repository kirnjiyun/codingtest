function solution(my_string, num1, num2) {
   const charArray = my_string.split('');
    [charArray[num1], charArray[num2]] = [charArray[num2], charArray[num1]];
    const result = charArray.join('');
    return result;
}
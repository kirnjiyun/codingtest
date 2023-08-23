function solution(my_string) {
    const sortedString = my_string.toLowerCase().split('').sort().join('');
    return sortedString;
}
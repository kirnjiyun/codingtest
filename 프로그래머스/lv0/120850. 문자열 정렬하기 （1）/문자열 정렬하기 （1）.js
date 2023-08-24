function solution(my_string) {
    const characters = my_string.split('').filter(char => !isNaN(char)).map(Number).sort((a, b) => a - b);  
    return characters;
}

function solution(numbers, direction) {
    var answer = [];

    if (direction === 'right') {
        const lastel = numbers.pop();
        numbers.unshift(lastel);
    } else if (direction === 'left') {
        const firstel = numbers.shift();
        numbers.push(firstel);
    }

    return numbers;
}

function solution(numbers) {
    let answer = 0;
    let max = 0;

    for (let i = 0; i < numbers.length; i++)
    {for (let j = i + 1; j < numbers.length; j++)
        {
            let product = numbers[i] * numbers[j];
         if (product > max) { max = product;}
        }
    }
    return max;}

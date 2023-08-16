function solution(n)
{
    var sum = 0;
   let answer = n.toString()
    for(let i = 0; i<answer.length; i++)
        {sum+=Number(answer[i])}
    return sum;
}
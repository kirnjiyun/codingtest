function solution(num_list) {
  let oddSum = num_list.filter((n, i) => i % 2 !== 0).reduce((a, c) => a + c, 0); 

  let evenSum =num_list.filter((n,i)=> i%2 !==1).reduce((a,c)=>a+c,0)
  return Math.max(oddSum, evenSum);
}

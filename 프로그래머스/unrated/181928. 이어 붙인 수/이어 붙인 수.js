function solution(num_list) {
  let isEven = num_list.filter((a) => a % 2 === 0);
  let isOdd = num_list.filter((a) => a % 2 === 1);

  let evenSum = isEven.reduce((acc, cur) => acc + String(cur));
  let oddSum = isOdd.reduce((acc, cur) => acc + String(cur));

  return Number(evenSum) + Number(oddSum);
}

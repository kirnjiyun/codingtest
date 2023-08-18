function solution(n) {
  let i = 1;
  let factorial = 1;

  while (factorial <= n) {
    i++;
    factorial *= i;
  }

  return i - 1;
}
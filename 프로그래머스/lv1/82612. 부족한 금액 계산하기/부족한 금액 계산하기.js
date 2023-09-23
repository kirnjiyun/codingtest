function solution(price, money, count) {
  const totalCost = price * ((count * (count + 1)) / 2);
  const shortfall = totalCost - money;
  return Math.max(0, shortfall);
}
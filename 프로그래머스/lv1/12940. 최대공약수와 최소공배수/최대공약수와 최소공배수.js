function solution(n, m) {
    const greatestCommonDivisor = Math.gcd(n, m);
    const leastCommonMultiple = (n * m) / greatestCommonDivisor;
    
    return [greatestCommonDivisor, leastCommonMultiple];
}
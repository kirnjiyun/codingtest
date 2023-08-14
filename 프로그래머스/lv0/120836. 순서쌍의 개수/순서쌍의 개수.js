function solution(n) {
    let count = 0;
    
    for (let i = 1;  i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            const j = n / i;
            if (i !== j) {
                count += 2; 
            } else {
                count += 1; 
            }
        }
    }
    
    return count;
}
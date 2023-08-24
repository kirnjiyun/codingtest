function solution(n) {
    function isComposite(num) {
        if (num < 3) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return true;
            }
        }
        return false;
    }
    
    let count = 0;
    for (let num = 1; num <= n; num++) {
        if (isComposite(num)) {
            count++;
        }
    }
    return count;
}

function solution(n) {
    let pizzaslices = 6;
    let result = 1;
    
    while (true) {
        let totalpizza = pizzaslices * result;
        let needpizza = totalpizza / n;
        
        if (Number.isInteger(needpizza)) {
            return result;
        }
        
        result++;
    }
}


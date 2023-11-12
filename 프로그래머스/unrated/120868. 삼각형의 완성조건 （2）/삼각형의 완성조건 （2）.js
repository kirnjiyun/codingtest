function solution(sides) {
    let maxPossible = sides[0] + sides[1] - 1;
    let minPossible = Math.abs(sides[0] - sides[1]) + 1;

    return maxPossible - minPossible + 1;
}


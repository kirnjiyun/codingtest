function solution(sides) {
    sides.sort((a, b) => a - b); // Sort the sides in ascending order

    const a = sides[2]; // Largest side
    const b = sides[1]; // Middle side
    const c = sides[0]; // Smallest side

    if (a < b + c) {
        return 1; // Triangle can be formed
    } else {
        return 2; // Triangle cannot be formed
    }
}


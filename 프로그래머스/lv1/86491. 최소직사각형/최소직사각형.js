function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    for (const size of sizes) {
        const [w, h] = size;
        maxWidth = Math.max(maxWidth, Math.max(w, h));
        maxHeight = Math.max(maxHeight, Math.min(w, h));
    }

    const answer = maxWidth * maxHeight;

    return answer;
}



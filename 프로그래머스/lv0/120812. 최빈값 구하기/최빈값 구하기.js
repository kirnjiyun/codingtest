function solution(array) {
    const answer = {};
    array.forEach(num => answer[num] = (answer[num] || 0) + 1);
    const mostFrequent = Math.max(...Object.values(answer));
    const mostFrequentValues = Object.keys(answer).filter(num => answer[num] === mostFrequent);
    return mostFrequentValues.length > 1 ? -1 : parseInt(mostFrequentValues[0]);
}


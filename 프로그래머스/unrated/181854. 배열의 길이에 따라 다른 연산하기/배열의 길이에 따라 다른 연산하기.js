function solution(arr, n) {
    const result = arr.map((element, index) => {
        if (arr.length % 2 === 1 && index % 2 === 0) {
            return element + n;
        } else if (arr.length % 2 === 0 && index % 2 === 1) {
            return element + n;
        }
        return element;
    });
    return result;
}

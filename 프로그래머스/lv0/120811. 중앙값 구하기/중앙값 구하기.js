function solution(array) {
    const center = Math.floor(array.length / 2)
    const list = array.sort((a,b) => a-b)
    return list[center]
}
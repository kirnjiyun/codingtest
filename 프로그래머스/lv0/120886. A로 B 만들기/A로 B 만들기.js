function solution(before, after) {
    let bef = before.split('').sort().join('');
    let aft = after.split('').sort().join('');

    return bef === aft ? 1 : 0;
}

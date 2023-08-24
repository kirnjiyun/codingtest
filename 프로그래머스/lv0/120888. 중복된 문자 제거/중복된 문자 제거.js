function solution(my_string) {
    const Chars = [];
    for (const x of my_string) {
        if (!Chars.includes(x)) {
            Chars.push(x);
        }
    }
    const result = Chars.join('');
    return result;
}
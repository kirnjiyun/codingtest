function solution(my_string) {
    const aeiou = ['a', 'e', 'i', 'o', 'u']

    return my_string.split('').filter(v=>!aeiou.includes(v)).join('');
}
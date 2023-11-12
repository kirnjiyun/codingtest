function solution(spell, dic) {
    spell = spell.sort().join("")
    return dic.map(a => a.split("").sort().join("")).find(a => a===spell) ? 1 : 2
}
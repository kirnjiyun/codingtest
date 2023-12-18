function solution(a, b) {
    const first = String(a) + String(b)
    const second = 2*a*b
    
    return first >= second ? Number(first) : Number(second)
}
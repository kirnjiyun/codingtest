function solution(s, n) {
    const answer = s.split('').map((string)=>{
        const code = string.charCodeAt()
        if(97 <= code && code <= 122){
            return String.fromCharCode((code+n - 97) % 26 + 97)
        }

        if(65 <= code && code <= 90){
            return String.fromCharCode((code+n - 65) % 26 + 65)
        }

        return ' '
    }).join('')

    return answer
}
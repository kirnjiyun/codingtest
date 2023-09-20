function solution(phone_number) {
    const length = phone_number.length;
    const star = '*'.repeat(length - 4);
    const lastFourDigits = phone_number.slice(-4);
    
    return star + lastFourDigits;
}

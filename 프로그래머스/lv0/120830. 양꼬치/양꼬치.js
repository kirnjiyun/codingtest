function solution(n, k) {
    let price=12000*n+2000*k
    let discount=Math.floor(n/10)*2000
    let totalprice=price-discount
     return totalprice;}
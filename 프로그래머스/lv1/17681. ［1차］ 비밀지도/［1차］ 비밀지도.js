function solution(n, arr1, arr2) {
  const result = [];
  
  for (let i = 0; i < n; i++) {
    const binary1 = arr1[i].toString(2).padStart(n, '0');
    const binary2 = arr2[i].toString(2).padStart(n, '0');
    
    let line = '';
    for (let j = 0; j < n; j++) {
      if (binary1[j] === '1' || binary2[j] === '1') {
        line += '#';
      } else {
        line += ' ';
      }
    }
    result.push(line);
  }
  
  return result;
}

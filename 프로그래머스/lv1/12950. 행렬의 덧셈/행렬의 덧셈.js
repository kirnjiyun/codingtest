function solution(arr1, arr2) {
  let result = [];

  let rows = arr1.length;
  let cols = arr1[0].length;
  
  for (let i = 0; i < rows; i++) {
   
    let currentRow = [];
    for (let j = 0; j < cols; j++) {

      currentRow.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(currentRow);
  }
  
  return result;}
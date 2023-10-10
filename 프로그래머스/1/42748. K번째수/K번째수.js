function solution(array, commands) {
  var answer = [];
  
  commands.forEach(function(command) {
    let i = command[0]; 
    let j = command[1]; 
    let k = command[2]; 
    
    let slicedArray = array.slice(i - 1, j).sort((a, b) => a - b);
    
    answer.push(slicedArray[k - 1]);
  });
  
  return answer;
}
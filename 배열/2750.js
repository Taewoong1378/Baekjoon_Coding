const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
input.shift();
const sorted = input.sort((a,b) => a - b);
let answer = '';
for(let i=0; i<sorted.length; i++) {
    answer += sorted[i] + '\n';
}
console.log(answer);


// 버블 정렬 (vscode로는 정상동작하는데... 왜 틀린거지)
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
input.shift();
function bubbleSort(array) {
    let temp;
    for (let i = 0;i<array.length-1;i++) {
      for (let j = 0;j<array.length-1-i;j++) {
        if (array[j] > array[j + 1]) { 
          temp = array[j]; 
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
      if(!temp){
        break;
      }
    }
    for(k=0; k<array.length; k++) {
        console.log(array[k]);
    }
};
bubbleSort(input);
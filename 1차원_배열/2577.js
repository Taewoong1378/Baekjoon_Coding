const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const array = input.map(Number);
const multiple = array[0] * array[1] * array[2];
const multipleArray = multiple.toString().split('');
let answer = 0;
for(let i=0; i<=9; i++) {
    for(let j=0; j<=multipleArray.length; j++) {
        if(Number(multipleArray[j]) === i) {
            answer += 1;
        }
    }
    console.log(answer);
    answer = 0;
}
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const array = input[1].split(' ').map(Number);
let max = array[0];
let min = array[0];
let answer;
for (let i=0; i<array.length; i++) {
    if(min > array[i]) {
        min = array[i];
    }
    if(max < array[i]) {
        max = array[i];
    }
    answer = `${min} ${max}`;
}
console.log(answer);
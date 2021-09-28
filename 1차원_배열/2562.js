const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const array = input.map(Number);
let max = array[0];
let maxIdx = 0;
for (let i=0; i<array.length; i++) {
    if (max < array[i]) {
        max = array[i];
        maxIdx = i;
    }
}
console.log(max);
console.log(maxIdx + 1);
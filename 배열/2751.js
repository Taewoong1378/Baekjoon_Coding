const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
input.shift();
const sorted = input.sort((a,b) => a - b);
let answer = '';
for(let i=0; i<sorted.length; i++) {
    answer += sorted[i] + '\n';
}
console.log(answer);
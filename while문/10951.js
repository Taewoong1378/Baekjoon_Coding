const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let answer = '';
for (let i=0; i<input.length; i++) {
    const num = input[i].split(' ');
    answer +=  parseInt(num[0]) + parseInt(num[1]) + '\n';
}
console.log(answer);

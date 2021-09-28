const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let answer = '';
for (let i=1; i<input.length; i++) {
    const num = input[i].split(' ');
    answer += `Case #${i}: ${num[0]} + ${num[1]} = ${parseInt(num[0]) + parseInt(num[1])}\n`;
}
console.log(answer);
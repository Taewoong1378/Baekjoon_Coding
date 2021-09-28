const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let answer = '';
for (let i=0; i<input.length; i++) {
    const num = input[i].split(' ');
    let result = parseInt(num[0]) + parseInt(num[1]);
    if (result > 0) {
        answer +=  result + '\n';
    }
}
console.log(answer);
const fs = require('fs');
const input = parseInt(fs.readFileSync('dev/stdin').toString().trim());
let answer = '';
for (let i=1; i<=input; i++) {
    for (let j=input; j>i; j--) {
        answer += ' ';
    }
    for (let k=0; k<i; k++) {
        answer += '*';
    }
    answer += '\n';
}
console.log(answer);
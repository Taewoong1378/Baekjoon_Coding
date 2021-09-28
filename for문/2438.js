const fs = require('fs');
const input = parseInt(fs.readFileSync('dev/stdin').toString().trim());
let answer = '';
for (let i=1; i<=input; i++) {
    for(let j=0; j<i; j++) {
        answer += '*';
    }
    answer += '\n';
}
console.log(answer);
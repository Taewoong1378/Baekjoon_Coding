const fs = require('fs');
const array = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let answer = '';
for (let i=0;i<array.length;i++) {
    const input = array[i].split(' ');
    if (input.length === 2) {
        answer += parseInt(input[0]) + parseInt(input[1]) + '\n';
    }
}
console.log(answer);
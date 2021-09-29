const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let answer = '';
for(let i=1; i<input.length; i++) {
    const num = input[i].split(' ')[0]
    const string = input[i].split(' ')[1]
    for(let j=0; j<string.length; j++) {
        for(let k=0; k<num; k++) {
            answer += string[j];
        }
    }
    answer += '\n';
}
console.log(answer);
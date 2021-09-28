const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let X = parseInt(input[0].split(' ')[1]);
const array = input[1].split(' ');
let answer = '';
for (let i=0; i<array.length; i++) {
    if(parseInt(array[i]) < X) {
        answer += array[i] + ' ';
    }
}
console.log(answer);

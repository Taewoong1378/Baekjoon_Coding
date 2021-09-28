const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const array = input[1].split(' ').map(Number);
let max = array[0];
for(let i=0; i<array.length; i++) {
    if (max < array[i]) {
        max = array[i];
    }
}
const newScore = array.map((v) => v / max * 100);
const answer = newScore.reduce((a,b) => a + b)/newScore.length;
console.log(answer);
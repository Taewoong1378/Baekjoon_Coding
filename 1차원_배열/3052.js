const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const array = input.map(Number)
                   .map((v) => v % 42);
let answer = 0;
for (let i=0; i<array.length; i++) {
    if (array.indexOf(array[i]) === i) {
        answer += 1;
    }
}
console.log(answer);

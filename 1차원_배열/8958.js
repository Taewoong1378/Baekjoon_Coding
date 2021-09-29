const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

for(let i=1; i<input.length; i++) {
    let count = 0;
    let sum = 0;
    for(j=0; j<input[i].length; j++) {
        if(input[i][j] === 'O') {
            count ++;
        } else {
            count = 0;
        }
        sum += count;
    }
    console.log(sum);
}
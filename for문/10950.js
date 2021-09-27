const fs = require('fs');
const array = fs.readFileSync('dev/stdin').toString().trim().split('\n');
for (let i=0;i<array.length;i++) {
    const input = array[i].split(' ');
    if (input.length === 2) {
        console.log(parseInt(input[0]) + parseInt(input[1]));
    }
}
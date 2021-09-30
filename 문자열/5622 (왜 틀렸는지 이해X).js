const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().toUpperCase().split('').sort();
const wordCharCode = []; 
let time = 0;
for(let i=0; i<input.length; i++) {
    wordCharCode.push(input[i].charCodeAt(0)-65);
    for(let j=2; j<10; j++) {
        if(Math.floor(wordCharCode[i] / 3) === j - 2) {
            time += (j + 1);
        }
    }
};
console.log(time);
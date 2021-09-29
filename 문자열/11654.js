const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const numArray = input[1].split('').map(Number);
console.log(numArray.reduce((a,b) => a + b));

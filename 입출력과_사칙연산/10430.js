const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ');
const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);
console.log(`${(A+B)%c}
${((A%C) + (B%C))%C}
${(A*B)%C}
${((A%C)*(B%C))%C}
`);
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ');
const var1 = parseInt(input[0]);
const var2 = parseInt(input[1]);
console.log(`${var1 + var2}
${var1 - var2}
${var1 * var2}
${Math.floor(var1 / var2)}
${var1 % var2}
`);
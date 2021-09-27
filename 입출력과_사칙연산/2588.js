const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const var1 = parseInt(input[0]);
const var2 = parseInt(input[1]);
const var2Split = var2.toString().split('');
console.log(`${var1 * parseInt(var2Split[2])}
${var1 * parseInt(var2Split[1])}
${var1 * parseInt(var2Split[0])}
${var1 * parseInt(var2)}
`);
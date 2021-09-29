const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim();
const alphabet = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65).toLowerCase());
let answer = '';
for(let i=0; i<alphabet.length; i++) {
    if (input.indexOf(alphabet[i]) === -1) {
        answer += '-1 ';
    } else if (input.indexOf(alphabet[i]) !== -1) {
        answer += `${input.indexOf(alphabet[i])} `;
    }
}
console.log(answer);
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim();
const alphabet = input.toUpperCase();
const num = [];
let answer = '';
for (let i=0; i<alphabet.length; i++) {
    let count = 1;
    for (let j=i+1; j<alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
            count++;
        }
    }
    num.push(count);
}
const prevNum = [...num];
if (num.sort()[num.sort().length-1] === num.sort()[num.sort().length-2]) {
    answer += '?';
} else {
    answer += alphabet[prevNum.indexOf(num.sort()[num.sort().length-1])];
}
console.log(answer);
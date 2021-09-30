// 첫 번째 답
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
if ([num.sort().length-1] === num.sort()[num.sort().length-2]) {
    answer += '?';
} else {
    answer += alphabet[prevNum.indexOf(num.sort()[num.sort().length-1])];
}
console.log(answer);



// 두 번째 답
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().toUpperCase();
const answer = Array(26).fill(0);
for(let i=0; i<input.length; i++) {
    answer[input[i].charCodeAt(0) - 65] += 1;
}
const max = Math.max(...answer);
answer.filter((v) => v === max).length === 1 ? console.log(String.fromCharCode(answer.findIndex((v) => v === max) + 65)) : console.log('?');

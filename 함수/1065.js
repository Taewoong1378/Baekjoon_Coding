const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim();
let count = 0;
const array = [];

function solution(input) {
    let num = input;
    for (let i=1; i<input; i++) {
        for (let j=0; j<String(input).length; j++) {
            array.push(num % 10);
            num = Math.floor(num / 10); 
        }
        if (array.length === 1 || array.length === 2) {
            count++;
        } 
        const sort = array.reverse();
        if (sort[1] - sort[0] === sort[2] - sort[1]) {
            count++;
        }
    }
    return count;
}

console.log(solution(input));
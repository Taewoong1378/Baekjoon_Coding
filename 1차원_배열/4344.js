const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
for(let i=1;i<input.length;i++) {
    let answer = 0;
    const num = Number(input[i].split(' ')[0])
    const score = input[i].split(' ').map(Number);
    const average = (score.reduce((a,b) => a + b) - num) / num;
    for(let j=1;j<=num;j++) {
        if(score[j] > average) {
            answer += 1; 
        }
    }
    console.log(`${((answer / num) * 100).toFixed(3)}%`);
}
// 피보나치 수열 (재귀 X)

// 피보나치 수열 (재귀 O)
const fs = require('fs');
const input = Number(fs.readFileSync('dev/stdin').toString().trim());
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n < 2) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
console.log(fibonacci(input));
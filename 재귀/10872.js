// 재귀 이용 안하고 푸는 방법
const fs = require('fs');
const input = Number(fs.readFileSync('dev/stdin').toString().trim());

function factorial(n) {
    let result = 1;
    for(let i=n; i>=1; i--){
        result *= i;
    }
    return result;
}
console.log(factorial(input));


// 재귀 이용해서 푸는 방법
const fs = require('fs');
const input = Number(fs.readFileSync('dev/stdin').toString().trim());
function factorial(n) {
    if (n < 2) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
console.log(factorial(input));
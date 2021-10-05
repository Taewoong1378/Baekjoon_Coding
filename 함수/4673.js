function d(n) {
    let num = n;
    let result = 0;
    for(let i=0; i<String(n).length; i++) {
        result += num % 10;
        num = Math.floor(num / 10);
    }
    return result + n;
}

let answer = '';
const selfNum = Array(10001).fill(true);

for(let i=0; i<=10000; i++) {
    selfNum[d(i)] = false;
}

for(let i=0; i<selfNum.length; i++) {
    if (selfNum[i]) {
        answer += i + '\n';
    }
}
console.log(answer);
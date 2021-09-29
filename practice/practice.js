const input = ['734', '893'];
let firstNum = input[0];
let secondNum = input[1];

let reverseFirstNum = '';
for(let i=firstNum.length-1; i>=0; i--) {
    reverseFirstNum += firstNum[i];
}

let reverseSecondNum = '';
for(let i=secondNum.length-1; i>=0; i--) {
    reverseSecondNum += secondNum[i];
}

let answer = '';
if (Number(reverseFirstNum) > Number(reverseSecondNum)) {
    answer += reverseFirstNum;
} else if (firstNum < secondNum) {
    answer += reverseSecondNum;
}
console.log(Number(answer));
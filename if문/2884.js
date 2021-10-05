// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().split(' ');
// let var1 = parseInt(input[0]);
// let var2 = parseInt(input[1]);

// const answer = [];
// let var1 = 0;
// let var2 = 30;

// if (var1 === 0) {
//     var1 = 24;
// }
// if (var2 - 45 === 0) {
//     answer.push(var1);
//     answer.push(0);
// } else if (var2 - 45 > 0) {
//     answer.push(var1);
//     answer.push(var2 - 45);
// } else {
//     answer.push(var1 - 1);
//     answer.push((var2 + 60) - 45); 
// }
// console.log(answer.join(' '));

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ');
let var1 = parseInt(input[0]);
let var2 = parseInt(input[1]);

var2 -= 45;

if (var2 < 0) { 
	var2 += 60; 
    var1--;
    
    if (var1 === -1) {
    	var1 = 23;
	}
}

console.log(var1 + " " + var2);
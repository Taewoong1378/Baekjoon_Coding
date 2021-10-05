const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ');
const var1 = parseInt(input[0]);
const var2 = parseInt(input[1]);
if(var1 > var2) {
    console.log('>');
} else if (var1 === var2){
    console.log('==');
} else {
    console.log('<');
}
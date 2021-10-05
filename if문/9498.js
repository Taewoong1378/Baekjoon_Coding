const input = require('fs').readFileSync('dev/stdin').toString().trim();
const score = parseInt(input);

if(score >= 90) {
    console.log('A')
} else if(89 >= score && score >= 80) {
    console.log('B')
} else if(79 >= score && score >= 70) {
    console.log('C')
} else if(69 >= score && score >= 60) {
    console.log('D')
} else {
    console.log('F')
};
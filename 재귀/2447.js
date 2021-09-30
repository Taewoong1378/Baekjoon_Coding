const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const num = parseInt(input);
const lines = [];

function printStars(num) {
  for(let i = 0; i < num; i++) {
    for(let j = 0; j < num; j++) {
      star(i, j, num)
    }
    lines.push('\n');
  }
}
 
function star(i, j, num) {
  if(i % 3 == 1 && j % 3 == 1) {
    // (1,1), (1,4), (1,7)...
    lines.push(' ');
  } else {
    if(num == 1) {
      lines.push('*');
    } else {
      star(i/3, j/3, num/3);
    }
  }
}

printStars(num);
console.log(lines.join(''));
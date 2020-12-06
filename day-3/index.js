const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const entries = data.trim().split(/\r?\n/);

console.log(entries[0][1]);//Take element [1] from row [0]
let sum = 0;

for(let i = 0; i < entries.length; i++) {
  for(let j = 0; j < entries[i].length; j++) {
    if (entries[i][j] == '#') {
      sum += 1;
    }
    console.log(sum);
  }
}
const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const entries = data.trim().split(/\r?\n/).map(i => +i);

const sum  = 2020;
for (let i = 0; i < entries.length; i++) {
  for (let j = i + 1; j < entries.length; j++) {
    for (let k = j + 1; k < entries.length; k++ ) {
      if (entries[i] + entries[j] + entries[k]=== sum) {
        console.log(entries[i], entries[j], entries[k]);
        console.log(entries[i] * entries[j] * entries[k]);
      }
    }
  }
}




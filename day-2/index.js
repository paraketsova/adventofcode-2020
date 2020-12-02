const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const entries = data.trim().split(/\r?\n/);


function checking(text) {
  console.log(text);
  let first;
  let second;
  let letter;
  let password;

  let findFirstHyfen = text.indexOf('-');
  
  first = text.substring(0, findFirstHyfen);
  console.log(first);

  let findFirstSpace = text.indexOf(' ');
  second = text.substring((findFirstHyfen + 1), findFirstSpace);
  console.log(second);
 
  let findColon = text.indexOf(':');
  letter = text.substring((findFirstSpace + 1), findColon);
  console.log(letter);
  
  password = text.substring(findColon + 2);
  console.log(password);
  
  /* TODO */
  return true
}

let sum = 0;
for (let i = 0; i < entries.length; i++) {
  if (checking(entries[i])) {
    sum += 1;
  }
}
console.log(sum);

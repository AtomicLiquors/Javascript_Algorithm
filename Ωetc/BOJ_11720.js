const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

console.log(input[1].trim().split('').reduce((acc, e) => acc + Number(e), 0));
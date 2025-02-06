const fs = require('fs');
const N = +fs.readFileSync(0, 'utf-8').trim();

console.log(Math.floor(N * (N-1)));
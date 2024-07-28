const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const arr = input[1].split(' ').map((v) => +v).sort();
const answer = Math.max(arr[0] * arr[1], arr[0] * arr[-1], arr[-1] * arr[-2]);
console.log(answer);
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const N = +input[0];
const arr = input[1].split(' ').map((v) => +v).sort((a, b) => (+a - +b));
const answer = Math.max(
    arr[0] * arr[1], 
    arr[0] * arr[N - 1], 
    arr[N - 1] * arr[N - 2]);
console.log(answer);
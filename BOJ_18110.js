const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const N = Number(input[0]);
if(N === 0){
    console.log(0);
    return;
}
    
const offset = Math.round(N * 0.15);
const difficulties = input.slice(1, N+1).map(Number).sort((a, b) => a - b);
const sliced = difficulties.slice(offset, N - offset)
// offset이 0일 경우 .slice(0, -0)이 되어 빈 배열을 반환.
const sum = sliced.reduce((acc, e) => acc + e, 0);
console.log(Math.round(sum / (N - offset * 2)));
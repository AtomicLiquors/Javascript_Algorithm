const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const output = [];
for(let i = 1; i < input.length; i++){
    const [A, B] = input[i].trim().split(' ').map(Number);
    const C = A + B;
    output.push(`Case #${i}: ${A} + ${B} = ${C}`);
}

console.log(output.join('\n'));
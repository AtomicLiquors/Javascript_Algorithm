const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(v => v.trim().split(' '));

const result = input.reduce((acc, log) => 
    acc + calculate(log)
, 0);

console.log(result);

function calculate(log){
    const [sh, sm] = log[0].split(':').map(Number);
    const [eh, em] = log[1].split(':').map(Number);
    return (eh - sh) * 60 + (em - sm);
}
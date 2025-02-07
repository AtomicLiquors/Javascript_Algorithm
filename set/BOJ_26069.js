const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const dancers = new Set();
dancers.add("ChongChong");

let count = 1;

input.slice(1).forEach((line) => {
    const [A, B] = line.trim().split(' ');
    if(dancers.has(A)){
        if(!dancers.has(B)){
            dancers.add(B)
            count++;
        }
    }else if(dancers.has(B)){
        dancers.add(A);
        count++;
    }
})

console.log(count);
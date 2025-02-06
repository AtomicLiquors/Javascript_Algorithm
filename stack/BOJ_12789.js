const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(' ');

const N = +input[0];
const que = input[1].split(' ').map(Number);
const stack = [];

let target = 1;

while(target <= N){

    const next = stack[stack.length-1];
    if(next === target)
        stack.pop();
    else{
        while(true){
            if(que.length === 0){
                console.log("Sad");
                return;
            }
                
            const curr = que.shift();
            if(curr === target)
                break;
            else
                stack.push(curr);
        }
    }        
    target++;
}

console.log("Nice");
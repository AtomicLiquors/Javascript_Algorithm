const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const N = +input[0];
const que = input[1].trim().split(' ').map(Number);
const stack = [];

let target = 1;

while(target <= N){
    const peek = stack[stack.length-1];
    if(peek === target)
        stack.pop();
    else{
        while(true){
            if(que.length === 0){
                console.log("Sad");
                return;
            }
                
            const poll = que.shift();
            if(poll === target)
                break;
            else
                stack.push(poll);
        }
    }        
    target++;
}

console.log("Nice");
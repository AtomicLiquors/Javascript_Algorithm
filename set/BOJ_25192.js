const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let set = new Set();
let count = 0;

for(line of input.slice(1)){
    
    const cmd = line.trim();
    if(cmd === 'ENTER')
        set = new Set();
    else if(!set.has(cmd)){
        set.add(cmd);
        count++;
    }
}

console.log(count);
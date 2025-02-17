const fs = require("fs");
//const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const input = [3, 'ENTER', 'constructor', 'toString'];


let set = null;
let count = 0;

for(line of input.slice(1)){
    
    const cmd = line.trim();
    if(cmd === 'ENTER')
        set = Object.create(null);
    else if(!set[cmd]){
        console.log(set[cmd]);
        set[cmd] = true;
        count++;
    }
}

console.log(count);
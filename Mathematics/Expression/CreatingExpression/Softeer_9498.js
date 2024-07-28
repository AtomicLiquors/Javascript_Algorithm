const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let result = '';
input[0].split('').forEach((v) =>
    {
        if(v === ')'){
            result += '1)+';
        }else{
            result += v;
        }
    }
);

console.log(result.slice(0, -1));
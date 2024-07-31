const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);
const arr = [0, ...input];

let left = 1;
let right = 7;

let result = true;
while(left < right){
    if(input[left++] !== left || input[right--] !== right){
        result = false;
        break;
    }
}
if(result){
    console.log('ascending');
    return;
}


result = true;
while(left < right){
    if(input[left++] !== 9 - left || input[right--] !== 9 - right){
        result = false;
        break;
    }
}
if(result){
    console.log('descending');
    return;
}

console.log('mixed');    
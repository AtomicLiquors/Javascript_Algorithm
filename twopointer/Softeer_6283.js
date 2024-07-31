const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);
const arr = [0, ...input];

let left = 1;
let right = 8;

let result = true;
while(left < right){
    if(arr[left] !== left || arr[right] !== right){
        result = false;
        break;
    }
    left++;
    right--;
}
if(result){
    console.log('ascending');
    return;
}


left = 1;
right = 8;
result = true;

while(left < right){
    if(arr[left] !== 9 - left || arr[right] !== 9 - right){
        result = false;
        break;
    }
    left++;
    right--;
}
if(result){
    console.log('descending');
    return;
}

console.log('mixed');    
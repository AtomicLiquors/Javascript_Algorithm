const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const arr = input[1].trim().split(' ').map(Number).sort((a, b) => a - b);

if(arr.length % 2 === 1){
    const median = arr[Math.floor(arr.length / 2)];
    console.log(median * median);
}else{
    const medianIdx = Math.floor(arr.length / 2);
    console.log(arr[medianIdx-1] * arr[medianIdx]);
}
    
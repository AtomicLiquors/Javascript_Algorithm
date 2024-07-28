const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(v => v.trim());

const N = +input[0];
const villes = input[1].split(' ').map(Number);

const counts = new Array(Math.max(...villes)).fill(0);

for(let i = 0; i < N; i++){
    for(let j = i+1; j < N; j++){
        const gap = Math.abs(villes[i] - villes[j]);
        counts[gap]++;
    }
}

let result;
for(count of counts){
    if(count > 0){
        result = count;
        break;
    }
}

console.log(result);
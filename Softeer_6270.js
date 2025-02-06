const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [N, M] = input[0].trim().split(' ').map(Number);

const test = Array.from({length: N}, ()=> new Array(2));

let answer = 0;
let prev = 0;
for(let n = 0; n < N; n++){
    const [sectionLength, limit] = input[n+1].trim().split(' ').map(Number);
    prev = test[n][0] = sectionLength + prev;
    test[n][1] = limit;
}

let idx = 0;
let position = 0;
for(let m = N+1; m < M+N+1; m++){
    const [distance, speed] = input[m].trim().split(' ').map(Number);
    position += distance;
    
    while(true){
        const sectionEnd = test[idx][0];
        const limit = test[idx][1];
        
        answer = Math.max(answer, speed - limit);

        if(position <= sectionEnd)
            break;
        else   
            idx++;
    }
}

console.log(answer);
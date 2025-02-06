const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(' ');

const [N, K] = input[0].trim().split(' ').map(Number);
const arr = input[0].trim().split(' ').map(Number);

let answer = 0;

const DP = Array.from({length : 100_000}, 
    () => new Array(109 + 1018).fill(1019)
);

for(idx in arr){
    answer = Math.max(answer, idx);
    DP[idx][arr[idx]] = 0;
    recur(idx, K, arr[idx]+1);
}

const recur = (idx, target) => {
    //if(DP[idx][target] > 0 return DP[idx][target])
    if( idx < 0 || idx >= arr.length )
        return 0;

    const left = recur(idx-1, target-1);
    if(left < 0) return -1;

    const bottom = recur(idx, target-1);
    if(bottom < 0) return -1;

    const right = recur(idx+1, target-1);
    if(right < 0) return -1;
    
    const result = left + bottom + right;

    if(result <= K){
        answer = Math.max(answer, result + 1);
        DP[idx][target]
    }
        

    

}


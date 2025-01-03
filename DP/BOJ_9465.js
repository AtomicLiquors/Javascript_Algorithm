const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const T = input[0];

for(let tc = 0; tc < T; tc++){
    const offset = tc * 3;
    const N = Number(input[1 + offset]);
    const stickers = input.slice(2 + offset, 3 + offset + 1).map((tokens) => tokens.split(' ').map(Number));

    const DP =  Array.from({ length: 2 }, () => new Array(N));
    
    DP[0][0] = stickers[0][0];
    DP[1][0] = stickers[1][0];

    DP[0][1] = stickers[1][0] + stickers[0][1];
    DP[1][1] = stickers[0][0] + stickers[1][1];

    for(let col = 2; col < N; col++){
        for(let row = 0; row < 2; row++){
        DP[row][col] = 
            Math.max(DP[row][col-2], DP[row^1][col-2], DP[row^1][col-1])
            + stickers[row][col];
        }
    }

    console.log(Math.max(
        DP[0][N-1], DP[1][N-1]
    ));
}
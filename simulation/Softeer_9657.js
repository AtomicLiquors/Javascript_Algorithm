const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [N, M] = input[0].trim().split(' ').filter(s => s!== '').map(Number);

const map = input.slice(1, -2).map(row => row.trim().split(' ').filter(s => s!== '').map(Number));
const attacks = input.slice(-2);


attacks.forEach((line) => {
    const [startRow, endRow] = line.split(' ').map(Number);
    for(let row = startRow - 1; row <= endRow - 1; row++){
        attack(row);
    }
});


const result = map.reduce((acc, row) => acc + row.reduce((sum, v) => sum + v, 0), 0)
console.log(result);

function attack(row){
    for(let col = 0; col < M; col++){
        if(map[row][col]){
            map[row][col] = 0;
            break;
        }
    }
}

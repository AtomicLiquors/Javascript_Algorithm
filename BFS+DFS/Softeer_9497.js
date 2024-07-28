const fs = require('fs');
const input = fs.readFileSync(0,'utf-8').trim().split('\n');

const N = +input[0];
const map = input.slice(1);
const result = Array.from({length: N}, () => new Array(N).fill(0));

const dR = [0, 0, -1, 1];
const dC = [-1, 1, 0, 0];

dfs(0, 0, 1);

function dfs(r, c, number){
    dfs(number + 1);
}

function isOuttaBound(r, c){
    return r < 0 || c < 0 || r >= N || c >= N;
}
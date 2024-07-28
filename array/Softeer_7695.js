const fs = require('fs');
const coords = fs.readFileSync(0, 'utf-8').trim().split('\n').slice(1).map(v => v.split(' ').map(Number));

coords.sort((r1, r2) => r1[1] - r2[1]);
console.log(coords[0].join(' '));
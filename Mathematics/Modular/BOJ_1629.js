const fs = require('fs');
const [A, B, C] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(BigInt);

const getPow = (exp) => {
    if(exp === 0n)
        return 1n;
    if(exp === 1n)
        return A % C;

    const half = getPow(exp / 2n);
    return getPow(exp % 2n) * (half * half) % C;
}

console.log(getPow(B).toString());
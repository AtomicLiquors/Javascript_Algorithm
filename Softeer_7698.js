const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

input.slice(1).forEach((v) => {
    result = "";
    while(v >= 5){
        result += "++++ ";
        v -= 5;
    }
    result += ( "|".repeat(v));
    console.log(result);
});
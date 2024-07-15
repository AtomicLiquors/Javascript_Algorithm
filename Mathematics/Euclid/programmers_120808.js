function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    numer1 *= denom2;
    numer1 += numer2 * denom1;
    denom1 *= denom2;
    
    return reduce(numer1, denom1);
    
    function reduce(a, b){
        for(let i = Math.min(a, b); i > 0; i--){
            if(a % i === 0 && b % i === 0){
                a /= i;
                b /= i;
            }  
        }
        return [a, b];
    }
}

/* 모범답안 : 옛날하고 문제가 좀 바뀐듯. */
/*
function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}

function solution(denum1, num1, denum2, num2) {
    let denum = denum1*num2 + denum2*num1;
    let num = num1 * num2;
    let gcd = fnGCD(denum, num); //최대공약수

    return [denum/gcd, num/gcd];
}
*/

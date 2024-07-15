function factorial(n, cnt){
    let mult = n;
    while(--cnt > 0){
        n *= --mult;
    }
    return n;
}

function solution(balls, share) {
    return factorial(balls, share) / factorial(share, share);
}


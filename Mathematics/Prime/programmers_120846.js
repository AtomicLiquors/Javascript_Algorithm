function solution(n) {
    var answer = 0;
    for(let i = n; i >= 4; i--){
        if(isComposite(i))
            answer++;
    }
    return answer;
    
}

function isComposite(num){
    if(num % 2 === 0) 
        return true;
    
    for(let i = 3; i <= Math.sqrt(num); i += 2){
        if(num % i === 0)
            return true;
    }
    return false;
}

/* 곱을 이용한 합성수 구하기*/
/*
function solution(n) {
    let dp = new Array(n+1).fill(1)
    for(let i = 2 ; i <= n ; i++){
        if(dp[i]){
            for(let j = 2 ; i*j <= n ; j++){
                dp[i*j] = 0
            }
        }
    }

    return dp.filter(el => el === 0).length
}
*/

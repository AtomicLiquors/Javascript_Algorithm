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

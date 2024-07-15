function solution(n) {
    const answer = [1];
    
    if(n == 1)
        return answer;
    
    for(let i = 2; i <= n / 2; i++){
        if( n % i === 0)
            answer.push(i);
    }
    answer.push(n);
    
    return answer;
}

/* 인라인으로 이렇게 할 수 있긴한데 굳이?
function solution(n) {
    return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0);
}
*/

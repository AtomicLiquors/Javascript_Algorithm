function solution(numbers) {
    const answer = [];
    
    let maxIdx = numbers.length-1;
    
    for(let i = numbers.length-1; i >= 0; i--){
        
        if(numbers[i] >= numbers[maxIdx]){
            answer[i] = -1;
            maxIdx = i;
        }else{
            let j = i+1;
            for(; j < numbers.length; j++){
                if(numbers[j] > numbers[i])
                    break;
            }
            answer[i] = numbers[j];
        }
        
    }
    
    return answer;
}
function solution(before, after) {
    const sortedBeforeArr = before.split('').sort();
    const sortedAfterArr = after.split('').sort();
    
    let result = 1;
    
    for(const idx in sortedAfterArr){
        if(sortedBeforeArr[idx] !== sortedAfterArr[idx]){
            result = 0;
            break;   
        }
    }
    
    return result;
}

// 한줄로 풀 수 있긴 했는데 O(N)연산 중복이 늘어나서 그렇게 안 했다.

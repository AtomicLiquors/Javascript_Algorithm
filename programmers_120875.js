function solution(dots) {
    let answer = false;
    const isSelected = new Array(4).fill(false);

    for(let i = 0; i < 4; i++){
        isSelected[i] = true;
        for(let j = i + 1; j < 4; j++){
            isSelected[j] = true;
            
            const pair1 = [];
            const pair2 = [];
            
            for(let idx in isSelected){
                if(isSelected[idx])
                    pair1.push(idx);
                else
                    pair2.push(idx);
            }
            
            const slope1 = getSlope(dots, pair1);
            const slope2 = getSlope(dots, pair2);
            if( slope1[0] === slope2[0] && slope1[1] === slope2[1] )
                answer = true;
            
            isSelected[j] = false;
        }
        isSelected[i] = false;
    }
    return answer ? 1 : 0;
    
    

    function getSlope(dots, pair){
        
        const d1 = dots[pair[0]];
        const d2 = dots[pair[1]];
        
        const xGap = d1[0] - d2[0];
        const yGap = d1[1] - d2[1];
        
        return reduceAB(xGap, yGap);
    }
    
    function reduceAB(a, b){
        if(a < 0){
            a = -a;
            b = -b;
        }
        
        const criteria = Math.min(Math.abs(a), Math.abs(b));
        
        for(let i = criteria; i >= 2; i--){
            if(a % i === 0 && b % i === 0){
                a /= i;
                b /= i;
            }
        }
        
        return [a, b];
    }
}

// 경우의 수가 적으므로 어렵게 풀 이유가 없다.
// 답안의 경우 나눗셈 연산으로 바로 풀었다. 실수 연산에 오차 발생할 우려는 없나?
/*
function solution(dots) {
    if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
        return 1;
    if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
        return 1;
    if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
        return 1;
    return 0;
}

function calculateSlope(arr1, arr2) {
    return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}
*/

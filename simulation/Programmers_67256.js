function solution(numbers, hand) {
    let answer = '';
    
    const left = [3,0];
    const right = [3,2];
    
    const pad = {
        1: [0,0],
        2: [0,1],
        3: [0,2],
        4: [1,0],
        5: [1,1],
        6: [1,2],
        7: [2,0],
        8: [2,1],
        9: [2,2],
        0: [3,1],
    }
    
    const leftButtons = {
        1: true, 
        4: true, 
        7: true
    }
    
    const rightButtons = {
        3: true, 
        6: true, 
        9: true
    };
    
    numbers.forEach((num) => {
        if(leftButtons[num]){
            answer += 'L';
            moveFinger(left, pad, num);
        }else if(rightButtons[num]){
            answer += 'R';
            moveFinger(right, pad, num);
        }else{
            const leftDist = getManhattan(left, pad[num]);
            const rightDist = getManhattan(right, pad[num]);
            
            if(leftDist > rightDist){
                answer += 'R';
                moveFinger(right, pad, num);
            }else if(leftDist < rightDist){
                answer += 'L';
                moveFinger(left, pad, num);
            }else{
                if(hand === 'left'){
                    answer += 'L';
                    moveFinger(left, pad, num);
                }else{
                    answer += 'R';
                    moveFinger(right, pad, num);
                }
            }
        }
    })
    return answer;
}

function moveFinger(hand, pad, number){
    hand[0] = pad[number][0];
    hand[1] = pad[number][1];
}

function getManhattan(dot1, dot2){
    return Math.abs(dot1[0] - dot2[0]) + Math.abs(dot1[1] - dot2[1]);
}

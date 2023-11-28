// 머리에서 검증을 하기도 전에 답이 맞아버렸다.

function solution(n, m, section) {
    let answer = 0;
    let painted = 0;
    
    for (let i = 0; i < section.length; i++){
        if(section[i] < painted){
            continue;
        }else{
            painted = section[i] + m;
            answer++;
        }    
    }
    
    return answer;
}

//forEach 사용이 익숙하지 않다.

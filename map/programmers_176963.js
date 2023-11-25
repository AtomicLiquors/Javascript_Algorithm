//추억점수

// Nullish coalescing operator (ES 2020)
// 널 병합 연산자 "??" 는 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.
// 연산자 우선 순위가 다섯번째로 낮은데, || 의 바로 아래이며 조건부 (삼항) 연산자의 바로 위이다.
// 그전에 썼던 "||"는...
// it also considers other falsy values like 0, false, '' (empty string), etc.

function solution(name, yearning, photo) {
    var answer = [];
    
    //그리움 점수의 총합
    var map = new Map();
    
    for(var i = 0; i < name.length; i++){
        map.set(name[i], yearning[i]);
    }
    
    var total;
    for(var i = 0; i < photo.length; i++){
        total = 0;
        for(var j = 0; j < photo[i].length; j++){
            total += ( map.get(photo[i][j]) || 0 );
        }
        answer.push(total);
    }
    return answer;
}

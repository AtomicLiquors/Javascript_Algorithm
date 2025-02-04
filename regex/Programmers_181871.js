function solution(myString, pat) {
    let count = 0;
    for(let i = 0; i < myString.length - pat.length + 1; i++){
        let flag = true;
        for(let j in pat){
            if(myString.charAt(i + +j) !== pat.charAt(j)){
                flag = false;
                break;
            }
        }
        count += flag;
    }
    return count;
}

function wrongSolution(myString, pat) {
    return myString.match(new RegExp(pat, 'g')).length;
}

function solution1(myString, pat) {
    const reg = new RegExp(`(?=${pat})`, "g")
    return myString.match(reg)?.length || 0;
}

// 일반 정규 표현식 패턴의 경우 : 엔진이 매칭된 문자를 뛰어넘고 *다음 문자부터* 탐색을 이어나간다.
// LookAhead(?=)를 사용한 경우 : 엔진이 매칭된 문자를 뛰어넘지 않으며, 따라서 중첩된 문자도 찾아준다.

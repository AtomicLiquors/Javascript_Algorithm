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
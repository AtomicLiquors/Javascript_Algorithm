
// before
function solution(strArr) {
    for(let i in strArr){
        strArr[i] = i % 2 === 0 ? strArr[i].toLowerCase() : strArr[i].toUpperCase();
    }
    return strArr;
}


// after
function solution(strArr) {
    return strArr.map((v, i) => i % 2 === 0 ? v.toLowerCase() : v.toUpperCase());
}
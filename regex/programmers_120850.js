function solution(my_string) {
    return my_string.match(/[0-9]/g).map((el) => +el).sort();
}

/* \d 사용하기
function solution(my_string) {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}
*/

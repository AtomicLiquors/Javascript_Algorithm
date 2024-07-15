function solution(my_string) {
    const arr = my_string.match(/[0-9]+/g);
    return arr === null ? 0 : arr.reduce((acc, item) => acc + (+item), 0);
}

// 1차
/* 
function solution(my_string) {
    return my_string.match(/[0-9]+/g).reduce((acc, item) => acc + (+item), 0);
}
*/

// 2차
/*
function solution(my_string) {
    const arr = my_string.match(/[0-9]+/g);
    return arr.length ? arr.reduce((acc, item) => acc + (+item), 0) : 0;
}
*/

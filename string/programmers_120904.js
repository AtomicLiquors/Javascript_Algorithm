function solution(num, k) {
    return (num + '').split('').indexOf(k + '') + 1 || -1;
}

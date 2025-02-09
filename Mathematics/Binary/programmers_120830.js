// 양꼬치
function solution(n, k) { 
  return n * 12000 + (k - Math.floor(n/10)) * 2000; 
}

/* tilt 이용 답변 */

/*
function solution(n, k) {
    k -= ~~(n/10); // 
    if (k < 0) k = 0;
    return n*12000+k*2000;
}
*/


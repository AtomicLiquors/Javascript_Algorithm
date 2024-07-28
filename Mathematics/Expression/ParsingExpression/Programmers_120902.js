function solution(my_string) {
    const elements = my_string.split(' ');
    let answer = +elements[0];
    
    let mult;
    for(let idx = 2; idx < elements.length; idx += 2){
        const num = +elements[idx];
        const opt = elements[idx - 1];
        answer += (opt === '+' ? num : -num);
    }
    
    return answer;
}

/* arr.shift()를 활용한 답안 */
/*
function solution(my_string) {
    const arr = my_string.split(' ');
    while(arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())
    return arr[0]
}
*/

// Before
function solution(num_list) {
    return num_list.reduce((acc, e) => acc + operate(e), 0);
}

function operate(num){
    let count = 0;
    while(num !== 1){
        count++;
        num % 2 && num --; 
        num /= 2;
    }
    return count;
}

// After
function solution(num_list) {
    return num_list.map(v => v.toString(2).length - 1).reduce((a, c) => a + c);
}

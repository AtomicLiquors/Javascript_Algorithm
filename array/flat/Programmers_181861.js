// Array 인스턴스의 flat() 메서드는 모든 하위 배열 요소가 지정된 깊이까지 재귀적으로 연결된 새 배열을 생성합니다.
// 배열의 원소만큼 추가하기

function solution(arr) {
    const X = [];
    arr.map(
        (e) => {
            for(let i = 0; i < e; i++){
                X.push(e);
            }
        }
    )
    return X;
}

function solution1(arr) {
    return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}

function solution2(arr) {
    return arr.reduce((a, c) => a.concat(Array(c).fill(c)), [])
}


function solution3(arr) {
    return arr.flatMap((n) => Array(n).fill(n));
}
const solution4=a=>a.map(v=>Array(v).fill(v)).flat()
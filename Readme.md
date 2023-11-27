# Javascript_Algorithm
자바스크립트 알고리즘 풀이를 저장합니다.

### 확인요망
[] 정수 최댓값
- Math.pow(2, 53) - 1
  
[] x가 null일 경우 y 반환

Javascript Math.min은 여러 인수를 가질 수 있다.
```
console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// Expected output: 1

```

Javscript에서 여러 변수에 동시 값 할당은 동작하지 않는다.
```
let lux, luy = 51;
let rdx, rdy = 0;
```
```
-> lux, rdx은 null
```

# Javascript_Algorithm
자바스크립트 알고리즘 풀이를 저장합니다.

### 숙지사항

#### Javscript에서 여러 변수에 동시 값 할당은 동작하지 않는다.
▲▲
```
let lux, luy = 51;
let rdx, rdy = 0;
```
```
-> lux, rdx은 null
```


[] 정수 최댓값
- Number.MAX_SAFE_INTEGER
- 구버전 : Math.pow(2, 53) - 1
  
[] x가 null일 경우 y 반환

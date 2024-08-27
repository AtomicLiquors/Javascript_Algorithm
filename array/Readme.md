### 음수 인덱스 사용하기
// arr.length - 1
// splice > 181860
// .at() : ES2022부터 지원함.

<br>

### 구조분해 할당 
- 배열 항목 switch
// forEach -> 181924

- 이차원 배열
https://school.programmers.co.kr/learn/courses/30/lessons/181895
<br>

### .concat()
- Spread 연산자로 대체하기
https://school.programmers.co.kr/learn/courses/30/lessons/181895
<br>

### .reduce()로 두 개 이상의 누산기 사용하기
// 181928
<br>

### .map()
- [배열 만들기](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/array/Programmers_120854.js)
- .map()으로 인덱스 사용하기 :// 181875
<br>

### filter()
- [같은 숫자는 싫어](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/array/filter/programmers_12906.js)
<br>

### filter로 idx사용하기
// 181885
// 181900

* 사용하지 않는 항목은 암묵적인 규칙으로 '_'로 표기한다.
<br>

### splice
slice와는 달리 새로운 배열을 반환하지 않는다.
문자열 자르기는 slice만 존재한다.
// splice > 181860
<br>

### sort()
배열 정렬의 기본은 '사전순 정렬'이다.
배열 내부의 값이 문자열이 아니라 숫자일 때도 마찬가지다.
따라서 숫자를 사용할 경우 반드시 다음과 같이 정렬해 준다.
```javascript
.sort((a, b) => a - b)
```
<br>
### 배열의 최댓값
```javascript
Math.max(...arr)
```

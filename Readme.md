### ⚠️ 실제 코드는 인라인으로 작성하지 말 것! ⚠️ 
forEach, map, filter, reduce 등등 
고차 함수 기반의 함수형 프로그래밍은 제어문 사용을 줄이고 가독성을 높이는 데 의미가 있다.  
프로그래머스 추천 답안은 JS 내장 메서드의 응용 감각을 기르는 것뿐,
성능이나 유지보수성 면에서 권장할 코드가 아니다.

<br>

### 입력받기
[링크](https://github.com/AtomicLiquors/Javascript_Algorithm/blob/main/input.md)

<br>

- ['0보다 크다'가 조건이면 부등호는 필요하지 않다.](https://github.com/AtomicLiquors/Javascript_Algorithm/blob/main/Mathematics/programmers_120815.js)

- !! 연산자로 Boolean 변환하기  
  1번 부정하면 반대 성질을 가진 Boolean이 되고,   
  1번 더 부정하면 일치하는 성질을 가진 Boolean이 된다.


- 값이 0일 경우 다른 값 반환하기 : [[숫자 찾기]](https://github.com/AtomicLiquors/Javascript_Algorithm/blob/main/string/programmers_120904.js)
- 값이 0으로 주어질 경우 1 추가하기 : XOR 연산자 활용
```javascript
// before
value += (target === 0 ? 1 : 0);
// after
value += target ^ 1;
```


<br>

### 신택스
- [올바른 이차원 배열 선언](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/array/2D/Declaration.md)
- 콜백 함수에 세미콜론 넣는 실수.
  
### 정렬
sort는 기본적으로 문자열 정렬이다. // array > sort > 42576
- [.sort()로 숫자 정렬](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/sort/Programmers_42576.js)
- [두 개의 정렬 조건식](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/sort/programmers_120880.js)
- [... 연산자로 문자열 -> 배열 만들기](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/string/Programmers_120911.js)


<br>

### 소인수분해
- [소인수 종류별로 구하기](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/tree/main/hyobin/javascript/prime)


<br>

### 아스키 코드
- [문자에서 아스키 코드 구하기, 문자로 되돌리기](https://github.com/AtomicLiquors/TPA_CHB/blob/main/hyobin/javascript/string/programmers_155652.js)


<br>

### for
- for… in의 각 항목은 숫자 인덱스가 아니라 문자열이다.  
  DP를 for in으로 풀었는데   
  idx+1이 1 + 1 = 2가 아니라 1 + “1” = 11이 되었다.  
  그래서 DP 테이블이 1부터 채워지지 않고 1, 11, 21... 처럼 채워지는 바람에 아래 꼴이 났다.
  ```
  [[7],[10,0],[18,1,0,null,null,null,null,null,null,null,null,1],[20,8,4,0,null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,4],[24,13,6,6,0,null,null,null,null,null,null,13,null,null,null,null,null,null,null,null,null,6,null,null,null,null,null,null,null,null,null,6]]
  ```
  

<br>

### 링크
- [정규식](https://github.com/AtomicLiquors/Javascript_Algorithm/tree/main/regex#readme)
- [수식 문자열 처리하기](https://github.com/AtomicLiquors/Javascript_Algorithm/tree/main/Mathematics/Expression)

 

<br>

### 누적합
- [2차원 배열의 특정 범위 값 채우기](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/prefix/2D/Programmers_92344.js)
  - [해설](https://kimjingo.tistory.com/155)


<br>

### 어렵게 풀 거 없어
- [평행](https://github.com/AtomicLiquors/Javascript_Algorithm/blob/main/programmers_120875.js)


<br>

### Map
[Map의 대안 + Map의 각종 선언 방식](https://github.com/AtomicLiquors/Javascript_Algorithm/blob/main/map/Readme.md)


<br>

### ascii를 String으로
[확인요망](https://school.programmers.co.kr/learn/courses/30/lessons/120834/solution_groups?language=javascript)
```javascript
// 120834
function solution(age) {
    return age.toString().split('').map((item) => String.fromCharCode(+item + 97)).join('');
}
```


<br>

### 날짜 대소비교
Date > 181838

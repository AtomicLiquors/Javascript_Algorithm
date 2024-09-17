### 약수 구하기
- [링크](https://github.com/AtomicLiquors/Javascript_Algorithm/blob/main/Mathematics/Divisor/programmers_120897.js)

<br>

### 숫자를 2진수 <u>문자열</u>로 변환
```
.toString(2)
```
- [1로 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/181880/solution_groups?language=javascript)


<br>

### 소숫점 표기

숫자를 소수점 첫째 자리까지 출력하려면 toFixed(n) 메서드를 사용한다.  
(단, <u>**문자열을 반환**</u>하므로 주의할 것.)  
- [배열의 평균](https://github.com/AtomicLiquors/codetree-TILs/blob/main/240904/%EB%B0%B0%EC%97%B4%EC%9D%98%20%ED%8F%89%EA%B7%A0/ave-of-array.js)

<br>

Q. Math.round를 쓰면 안되나요?  
A. Math.round는 정수를 반환한다. 자릿수 매개변수를 받지도 않는다.
- [Math.round 공식 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)

<br>


### 정수 최대 최솟값
```javascript
Number.MAX_SAFE_INTEGER / Number.MIN_SAFE_INTEGER
```

<br>

### Javascript Math.min은 여러 인수를 가질 수 있다.
  ```javascript
  console.log(Math.min(2, 3, 1));
  // Expected output: 1
  
  console.log(Math.min(-2, -3, -1));
  // Expected output: -3

  const array1 = [2, 3, 1];

  console.log(Math.min(...array1));
  //Expected output: 1
  
  ```

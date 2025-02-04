### About
JavaScript에서 정규 표현식을 사용하는 방법을 다루는 저장소.  
정규 표현식 패턴은 [Algorithm_Practice 저장소](https://github.com/AtomicLiquors/Algorithm_Practice/blob/main/regex/Pattern.md)에서 일괄 관리하도록 함.  


<BR>

### .match()
.match()에 정규식 넣을 때는 쌍따옴표를 쓰지 않는다.
```javascript
// (x) : .match()가 null을 반환한다.
this.id = id.match("/[a-z0-9-_.]/g").join("");
// (o)
this.id = id.match(/[a-z0-9-_.]/g).join("");
```

<br>

동적 정규 표현식
```javascript
myString.match(new RegExp(pat, 'g'))
```
<br>

### null처리에 유의하기
일치하는 결과가 없으면 빈 배열([])이 아니라 null을 반환하는 점에 주의하라.
//120864

<br>

### 문자열에서 숫자만 찾기
[120850](https://github.com/AtomicLiquors/Javascript_Algorithm/blob/main/regex/programmers_120850.js)

### $ : 문자열 끝
  - [신규 아이디 추천](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/regex/2021_KAKAO_BLIND_RECRUIT_LV1.js)


### ^ : 문자열 시작

### [^ ] : 부정 집합

### \s : 공백 문자
[Programmers_181868](https://github.com/AtomicLiquors/Javascript_Algorithm/blob/main/regex/programmers_181868.js)

### \b : 단어

### ?= : "Positive Lookahead"
[Programmers_181871](https://github.com/AtomicLiquors/Javascript_Algorithm/blob/main/regex/Programmers_181871.js)
"문자열 등장 횟수" 찾기 문제에서, ?= 플래그가 없으면 중첩되는 문자열은 건너뛰어 버린다.


### ?! : "Negative lookahead"
단어 부정.  
`[^abc]`는 `a`, `b`, `c`가 아닌 모든 것을 선택한다.  
`\b(?!matches\b)\w+`는 "matches"단어가 아닌 모든 단어를 선택한다.

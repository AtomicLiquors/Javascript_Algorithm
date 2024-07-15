### .match()
.match()에 정규식 넣을 때는 쌍따옴표를 쓰지 않는다.
다른 정규식 
```javascript
// (x) : .match()가 null을 반환한다.
this.id = id.match("/[a-z0-9-_.]/g").join("");
// (o)
this.id = id.match(/[a-z0-9-_.]/g).join("");
```

### null처리에 유의하기
일치하는 결과가 없으면 빈 배열([])이 아니라 null을 반환하는 점에 주의하라.
//120864

### 문자열에서 숫자만 찾기
// 120850


### $ : 문자열 끝
  - [신규 아이디 추천](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/regex/2021_KAKAO_BLIND_RECRUIT_LV1.js)
### 문자열 결합
```javascript
var str1 = "Hello ";
var str2 = "World";
console.log(str1.concat(str2).concat("!"));
// concat : 체이닝이 가능
```

### 문자열 길이
```javascript
str1.length
// 메서드가 아니라 프로퍼티
```

```javascript
str.charAt(); -> 문자열 길이를 벗어나면 "빈 문자열"을 반환한다.
str[10]; -> 문자열 길이를 벗어나면 "undefined"를 반환한다.

"abcd".indexOf("bc"); -> 1
  // 문자열 등장 인덱스
  
"abcdab".lastIndexOf("ab"); 
// 문자열 마지막 등장 인덱스
```

### substring v substr
위치 지정 / 길이 지정으로 부분 문자열 반환.

```javascript
.substring(pos1, pos2);
.substr(pos, length);
```
### Map은 객체로 대체 가능하다.
Map은 ES6 사양에서 등장했다.
```javascript
const object = {
    key: value
}

console.log(object[key]);
```
[Map과 객체 비교](https://kellis.tistory.com/129)

  
### 지정된 엔트리로 Map 만들기
```javascript
const map = new Map([
    [key1, value1],
    [key2, value2],
    [key3, value3],
]);
```

### 배열로 Map 만들기
```
const arr = ["R", "T", "C", "F", "J", "M", "A", "N"];
const map = new Map();

arr.forEach((key) => {
  map.set(key, 0);
});
```

#### 배열로 Map 만들기 - split
```
const terms = ["A 6", "B 12", "C 3"];
const mappedTerms = {};

terms.forEach(term => {
  const [key, value] = term.split(' ');
  mappedTerms[key] = parseInt(value, 10);
});
```

* 주의 : map 선언을 [ ]로 했으면 값 가져오는 것도 [ ]로.

  <br>


### Array.prototype.map()
이건 자료구조 Map하고 상관없고, 배열을 순회하면서 콜백함수를 돌려서 "새로운 배열"을 생성하는 것입니다. 

```
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]


// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
```


### 객체로 Map 만들기
Object랑 Map이랑 둘이 기능이 비슷한데 굳이 쓸 일이 있을까?
```javascript
// Step 1: Define the object
const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    ...
};

// Step 2: Convert the object to an array of key-value pairs
const morseEntries = Object.entries(morse);

// Step 3: Initialize the Map using the array
const morseMap = new Map(morseEntries);

console.log(morseMap);
```

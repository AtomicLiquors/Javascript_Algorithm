### 배열로 Map 만들기
```
const types = ["R", "T", "C", "F", "J", "M", "A", "N"];
const map = new Map();

types.forEach((key) => {
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

### Array.prototype.map()
이건 배열로부터 Map을 생성하는 게 아니라 콜백함수를 돌려서 새로운 배열을 생성하는 것입니다. 

```
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]


// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
```

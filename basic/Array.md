```
var arr = [1,2,3,4,5];
```

```
arr.pop(); // 5 -> [1, 2, 3, 4]
```
```
arr.shift(); // 1 -> [2, 3, 4]
```
```
arr.push(6); // 4(배열의 길이 반환)
```
```
arr.unshift(0); // (인자를 맨 앞에 추가하고 배열의 길이 반환)
```
```
arr.reverse();
arr.sort();
```
### 배열 concat
```
var arr1 = [1,2,3];
var arr2 = [4,5,6]'
arr3 = arr1.concat(arr2);
```

### reduce method  
https://www.w3schools.com/jsref/jsref_reduce.asp  
https://miiingo.tistory.com/365  
배열 항목에 대해 특정 함수를 실행시키는 메서드.   
이 때 실행되는 함수를 reducer 함수라고 부른다.  
&nbsp;  
reduce()에는 누산기가 포함되어 있기 때문에, 배열의 각 요소에 대해 함수를 실행하고 누적된 값을 출력할 때 용이하다.  
  
가장 기본적인 예제로는 모든 배열의 합을 구하는 경우가 있다.  
```
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur, idx) => { return acc += cur; }, 0);
console.log(result);  // 15

const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((acc, cur, idx) => { return acc += cur; }, 10);
console.log(result2);  // 25
```

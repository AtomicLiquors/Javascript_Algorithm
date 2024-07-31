  

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

### .reduce()
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

### .every()
The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
```javascript
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
```
https://school.programmers.co.kr/learn/courses/30/lessons/181831/solution_groups?language=javascript


### indexOf()
Array 인스턴스의 indexOf() 메서드는 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 찾을 수 없는 경우 -1을 반환합니다.
두 번째 매개변수는 시작 인덱스입니다.
https://school.programmers.co.kr/learn/courses/30/lessons/181898/solution_groups?language=javascript

### some()
조건을 만족하는 원소가 하나라도 있는지 확인한다. 배열 값을 조작하지 않는다.
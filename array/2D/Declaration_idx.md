## 이차원 배열 선언 : 인덱스 사용
### for...in을 사용하지 않는다.

[x]
입력 :
```javascript
const isEmpty = new Array(n);
for(const idx in isEmpty){
    isEmpty[idx] = new Array(m).fill(false);
}
        
console.log(isEmpty)
```

출력 :
```
[ <2 empty items> ]
[ <2 empty items> ]
[ <2 empty items> ]
[ <2 empty items> ]
[ <2 empty items> ]
```

[o]
입력 :
```javascript
const isEmpty = new Array(n);

for (let idx = 0; idx < n; idx++) {
    isEmpty[idx] = new Array(m).fill(false); 
}
```

출력 :
```
[
  [ false, false, false, false, false ],
  [ false, false, false, false, false ],
  [ false, false, false, false, false ],
  [ false, false, false, false, false ],
  [ false, false, false, false, false ]
]
```

#### [설명]
for...in은 배열의 인덱스를 순회하는 것이 아니라 배열 속성을 순회하는 데 사용됩니다.  
**따라서 배열에 빈 슬롯이 있으면 해당 슬롯을 건너뛰게 됩니다.**    
반면, for 루프는 명시적으로 배열의 인덱스를 순회하기 때문에 빈 슬롯도 올바르게 채울 수 있습니다.

```err
Cannot read properties of undefined (reading 'NaN')
```

### javascript switch는 여러 케이스를 허용하지 않는다.
```javascript
// X
switch(cmd[0]){
        case '1', '2':
            //...
            break;
        case '3', '4', '7', '8':
            //...
            break;
        case '5':
            //...
            break;
        case '6':
            //...
            break;
    }
```
이렇게 switch문을 작성하면 가장 마지막 케이스 외에 나머지 케이스는 무시한다.  
더 악질적인 것은 컴파일이나 런타임 에러가 발생하지도 않는다.

```javascript
// O
switch(cmd[0]){
        case '1':
        case '2':
            //...
            break;
        case '3':
        case '4':
        case '7':
        case '8':
            //...
            break;
        case '5':
            //...
            break;
        case '6':
            //...
            break;
    }
```

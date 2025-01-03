## About
온라인 테스트 사이트에서 문제풀이를 위한 데이터를 입력받기.

<br>

### require('fs')
백준에서 권장하는 입력 방식.
```javascript
const fs = require('fs');
const inputWithNoEncoding = fs.readFileSync(0).toString().trim().split('\n');
const inputWithEncoding = fs.readFileSync(0, 'utf8').trim().split('\n');
const cvtInputToNumber = fs.readFileSync(0, 'utf8').trim().split('\n');
// ['10', '']와 같은 배열의 형태로 값이 반환되기 때문에 [0]번째 인덱스 값을 가져온다.
console.log(Number(cvtInputToNumber[0]));
```
.trim()을 해 주지 않으면 공백 한 줄이 입력에 포함되어 버린다.
(주어진 숫자만큼 slice()해서 사용하는 편이 안전할 수도 있다.)

**숫자 배열로 변환**
```javascript
const arr = input[1].split(' ').filter(s => s !== '').map(Number);
```


[[참고 링크]](https://leehyungi0622.github.io/2021/03/24/202103/210324-algorithm_javascript_input/)

<br>

### require('readline')
구름 IDE.
```javascript
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = [];
	
	for await (const line of rl) {
		input.push(line);
		rl.close();
	}
	
	console.log(input[0].split(" ").reduce((acc, e) => acc + Number(e), 0));	
    
	process.exit();
})();
```




<br>

### Tip
- Number()대신 +연산자 사용하기.
```javascript
// before
stringifiedNumbers.filter(string => isPrime(Number(string)).length
// after
stringifiedNumbers.filter(string => isPrime(+string)).length
```

**문자열에서 숫자 찾기**  
정규 표현식 사용

**공백 없는 문자열을 배열로**  
```
split('') -> [...]로 대체가능
```


<br>

### TroubleShooting
filter를 해 주지 않으면 ''이 배열에 포함되고 숫자 0으로 변환되는 바람에 코너케이스에 걸린다.

<br>

**VSC에서 터미널 입력하면 오류가 뜬다**
node.js 설정을 위해 launch.json을 만들고,  
```configuration```에 ```"console": "integratedTerminal"```을 추가해 준다.
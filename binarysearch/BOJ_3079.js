// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	const input = [];
	for await (const line of rl) {
		input.push(line);
	}
	rl.close();
	
	
	const [N, M] = input[0].split(' ').map(Number);
	const judges = input.splice(1).filter((e) => e !== '').map(Number);
	
	let bottom = BigInt(1);
	let top = BigInt(Math.max(...judges) * M);
	
	while(top > bottom){
		let mid = BigInt((bottom + top) / 2n);
		const capability = judges.reduce((acc, e) => acc + mid / BigInt(e), BigInt(0));
		if(capability >= M){
			top = mid;
		}else{
			bottom = mid + 1n;
		}
	}
	
	console.log(String(top));
	
	process.exit();
})();
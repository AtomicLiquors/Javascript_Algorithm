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
	const trees = input[1].split(' ').map(Number);
	
	let bottom = 1;
	let top = Math.max(...trees);
	
	while(top > bottom){
		let mid = parseInt((top + bottom) / 2);
		const result = trees.reduce((acc, tree) => acc + Math.max(0, tree - mid), 0);
		
		if(result >= M){
			bottom = mid + 1;
		}else{
			top = mid;
		}
	}
	
	console.log(top-1);
	
	process.exit();
})();
// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = [];
	for await (const line of rl) {
		input.push(line);
	}
	rl.close();
	
	const [K, N] = input[0].split(' ').map(Number);
	const lans = input.splice(1).map(Number);
	let bottom = 1;
	let top = Math.max(...lans);
	
	let mid;
	while(top > bottom){
			mid = Math.floor((top + bottom) / 2);
			
		const result = lans.reduce((acc, lan) => 
			acc + Math.floor(lan / mid)
		,0);
		
		if(result < N)
			top = mid - 1;
		else
			bottom = mid+1;
	}
	
	console.log(top-1);
	process.exit();
})();

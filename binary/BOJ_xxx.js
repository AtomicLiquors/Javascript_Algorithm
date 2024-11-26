
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
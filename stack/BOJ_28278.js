const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const stack = [];
let output = [];

for (line of input.slice(1)) {
  const cmd = line.trim().split(" ").map(Number);

  switch (cmd[0]) {
    case 1:
      stack.push(cmd[1]);
      break;
    case 2:
      output.push(stack.length > 0 ? stack.pop() : -1);
      break;
    case 3:
      output.push(stack.length);
      break;
    case 4:
      output.push(stack.length > 0 ? 0 : 1);
      break;
    case 5:
      output.push(stack.length > 0 ? stack[stack.length - 1] : -1);
      break;
  }
}

console.log(output.join("\n"));

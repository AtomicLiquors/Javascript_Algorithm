/* 
const input = 
[
11,
'6',
'1 3',
'1 8',
'7',
'8',
'3',
'2 5',
'1 2',
'5',
'4',
'4',
]
 */

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');


const output = [];

function Node(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
}

function Deque() {
    this.first = null;
    this.last = null;
    this.size = 0;

    this.push = (num) => {
        const target = new Node(num);
        if(this.size === 0){
            this.first = this.last = target;
        }else{
            target.prev = this.last;
            this.last.next = target;
            this.last = target;
        }
        this.size++;
    }

    this.unshift = (num) => {
        const target = new Node(num);

        if(this.size === 0){
            this.first = this.last = target;
        }else{
            target.next = this.first;
            this.first.prev = target;
            this.first = target;
        }
        this.size++;
    }

    this.pop = () => {
        if(this.size === 0)
            return -1;
        const target = this.last;
        if(target.prev == null){

        }else{
            
        }
        this.last = target.prev;
        this.last.next = null;
        this.size--;
        return target.value;
    }

    
    this.shift = () => {
        if(this.size === 0)
            return -1;
        const target = this.first;
        this.first = target.next;
        this.first.prev = null;
        this.size--;
        return target.value;
    }
}

const deque = new Deque();

for(let i = 1; i < input.length; i++){
    const cmd = input[i].trim();
    
    switch(cmd[0]){
        case '1':
        case '2':
            const value = +cmd.split(' ')[1];
            cmd[0] === '1' ? 
                deque.unshift(value) :
                deque.push(value);
            break;
        case '3':
            output.push(deque.shift());
            break;
        case '4':
            output.push(deque.pop());
            break;
        case '5':
            output.push(deque.size);
            break;
        case '6':
            output.push(deque.size === 0 ? 1 : 0);
            break;
        case '7':
            output.push(deque.size === 0 ? -1 : deque.first.value);                    
            break;
        case '8':
            output.push(deque.size === 0 ? -1 : deque.last.value);
            break;
    }
}

console.log(output.join('\n'));
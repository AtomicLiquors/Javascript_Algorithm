// 달리기 경주
class Node {
    constructor(name, next, prev) {
        this.name = name;
        this.next = next;
        this.prev = prev;
    }
}

function solution(players, callings) {

    var answer = [];
    const map = new Map();
    var curr;
    var next = null;
    var prev = null;
    for(var i = 0; i < players.length; i++){
        curr = new Node(players[i], null, prev);
        if(prev !== null){
            prev.next = curr;
        }else{
            var temp = new Node("head", curr, null);
            map.set("head", temp);
            curr.prev = temp;
        }
            
        map.set(players[i], curr);
        prev = curr; 
    }
    
    next = null;
    prev = null;

    for(var i = 0; i < callings.length; i++){
        
        curr = map.get(callings[i]);
        next = curr.next;
        prev = curr.prev;
       
        curr.prev = prev.prev;
        if(prev.prev != null) prev.prev.next = curr;

        if(next != null) next.prev = prev;
        prev.next = next;

        curr.next = prev;
        prev.prev = curr;
    }
    
    var target = map.get("head");
    
    while(target.next !== null){
        target = target.next; 
        answer.push(target.name);
    }
    
    return answer;
}

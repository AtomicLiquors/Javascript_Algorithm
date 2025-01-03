function solution(n, computers) {
    /* 맹점 : 컴퓨터가 1개인 네트워크 (연결 관계가 i === j)를 포함하지 않아서 오답이 났다. */
    let answer = 0;
    
    const network = new Array(n);
    for(let i = 0; i < n; i++){
        network[i] = new Array(n).fill(0);
    }
    
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            if(computers[i][j] === 1 && network[i][j] === 0){
                traverse(i, j, ++answer);
                console.log(network);
            }
        }    
    }
    
    function traverse(start, end, id){
        network[start][end] = network[end][start] = id;
        
        for(let next = 0; next < n; next++){
            if(network[end][next] > 0 || computers[end][next] === 0)
                continue;
            
            traverse(end, next, id);
        }
    }
    return answer;
}

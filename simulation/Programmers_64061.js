// https://school.programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

function solution(board, moves) {
    let answer = 0;
    const basket = [];
    const length = board.length;
    
    const topIdxs = [];
    
    for(let col = 0; col < length; col++){
        let row = 0;
        while(board[row][col] === 0){
            if(++row === length) 
                break;
        }
        topIdxs[col] = row;
    }
    
    moves.forEach((e) => {
        const col = e-1;
        
        const top = topIdxs[col];
        if(top === length)
            return;
        
        const doll = board[top][col];
        
        if(basket[basket.length - 1] === doll){
            basket.pop();
            answer += 2;
        }else{
            basket.push(doll);
        }
        topIdxs[col]++;
    })
    
    return answer;
}

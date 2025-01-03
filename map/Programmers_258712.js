function solution(friends, gifts) {
    const nameToIdxMap = new Map();
    friends.forEach((friend, idx) => {
        nameToIdxMap.set(friend, idx);
    });
    
    const giftPoints = new Array(friends.length).fill(0);
    const giftExpectations = new Array(friends.length).fill(0);
    const matrix = Array.from({length: friends.length}, () => new Array(friends.length).fill(0));
    
    gifts.forEach((info) => {
        const [giver, reciever] = info.split(' ');
        
        const giverIdx = nameToIdxMap.get(giver);
        const recieverIdx = nameToIdxMap.get(reciever);
        
        matrix[giverIdx][recieverIdx]++;
        giftPoints[giverIdx]++;
        giftPoints[recieverIdx]--;
    })
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++) {
            if(matrix[i][j] == matrix[j][i]){
                if(giftPoints[i] > giftPoints[j])
                    giftExpectations[i]++;
                else if(giftPoints[i] < giftPoints[j])
                    giftExpectations[j]++;
            }else if(matrix[i][j] > matrix[j][i]){
                giftExpectations[i]++;
            }else{
                giftExpectations[j]++;
            }
        }
    }
    /*
    이 부분은 차라리 전체를 돌면서 큰 쪽에 대해서만 로직을 수행해 주는 편이 코드가 명료할 수 있다.
    for(let i=0;i<length;i++){
       for(let j=0;j<length;j++){
           if(record[i][j]>record[j][i]){
               points[i]+=1
           } else if(record[i][j]===record[j][i]){
               if(giftPoints[i]>giftPoints[j]){
                   points[i]+=1
               }
           }
       }
   } 
    */
    
    return Math.max(...giftExpectations);
}

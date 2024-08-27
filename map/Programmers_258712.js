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
    
    return Math.max(...giftExpectations);
}

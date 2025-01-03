function solution(enroll, referral, seller, amount) {
    const answer = [];
    const PROFIT = 100;
    const nameToIdx = new Map();
    enroll.forEach((name, idx) => {
        nameToIdx.set(name, idx);
        answer[idx] = 0;
    }); 
    
    seller.forEach((name, idx) => distribute(getIdx(name), amount[idx] * PROFIT));
    
    return answer;
    
    function distribute(idx, sales){
    
        const referrer = referral[idx];
        const referenceFee = Math.floor(sales / 10);   
        const profit = sales - referenceFee;
        answer[idx] += profit;

        if(referenceFee > 0 && referrer !== "-")
            distribute(getIdx(referrer), referenceFee);
    }
    
    function getIdx(name){
        return nameToIdx.get(name);
    }
}

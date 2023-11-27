// Number.MAX_SAFE_INTEGER

function solution(wallpaper) {
    var answer = [];
    
    let height = wallpaper.length;
    let width = wallpaper[0].length;
    
    let max = 0;
    
    
    let lux, luy;
    lux = luy = Number.MAX_SAFE_INTEGER;
    
    let rdx, rdy;
    rdx = rdy = 0;
    
    
    
    for (var i = 0; i < height; i++){
        for(var j = 0; j < width; j++){
            if(wallpaper[i][j]  === "#"){
                lux = Math.min(lux, i);
                luy = Math.min(luy, j);
                
                rdx = Math.max(rdx, i);
                rdy = Math.max(rdy, j);
            }
        }
    }
    
    answer.push(lux);
    answer.push(luy);
    answer.push(rdx+1);
    answer.push(rdy+1);
    return answer;
}
/*
function manhattan(lux, luy, rdx, rdy){
    return Math.abs(rdx - lux) + Math.abs(rdy - luy);
}
*/


/* 모범답안 : forEach 활용이 인상적이다. 
배열을 분해하여 Math.min/max 한번만 사용하여 최대/최소를 구하는 것도 마찬가지. 
다만 +1 연산은 return문에 넣어서 한 번만 실행하는 게 더 낫지 않았을까.*/
/*
function solution(wallpaper) {
    let left = [];
    let top = [];
    let right = []
    let bottom = [];
    wallpaper.forEach((v,i) => {
        [...v].forEach((val,ind) => {
            if(val === "#") {
                left.push(i)
                top.push(ind)
                right.push(i + 1)
                bottom.push(ind + 1)
            }
        })
    })
    return [Math.min(...left), Math.min(...top), Math.max(...right), Math.max(...bottom)]
}
*/

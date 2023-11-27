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

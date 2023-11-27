/* 공원 산책 */
var dR = [-1, 1, 0, 0];//NSWE
var dC = [0, 0, -1, 1];
var currR, currC;
var height, width;
var map;
var direction = new Map();
direction.set("N", 0);
direction.set("S", 1);
direction.set("W", 2);
direction.set("E", 3);


function solution(park, routes) {
    map = park;
    height = park.length;
    width = park[0].length;
    let answer = [];
    

    let flag = false;
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            if(park[i][j] === "S"){
                currR = i;
                currC = j;
                flag = true;
                break;
            }
        }
        if(flag) break;
    }
    
    var route;
    for(let i = 0; i < routes.length; i++){
        route = routes[i].split(" ");
        ping(route[0], route[1]);
    }
    answer.push(currR);
    answer.push(currC);
    return answer;
}

function ping(dir, cnt){
    let nr = currR;
    let nc = currC;
    for (let i = 0; i < cnt; i++){
        nr += dR[direction.get(dir)];
        nc += dC[direction.get(dir)];
        if(nr < 0 || nc < 0 || nr >= height || nc >= width)
            return;
        if(map[nr][nc] === "X")
            return;
    }
    
    currR = nr;
    currC = nc;
}

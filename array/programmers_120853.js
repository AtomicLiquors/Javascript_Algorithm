function solution(s) {
    const result = [];
    s.split(' ').map((item) => {if(item === 'Z') result.pop(); else result.push(+item)})
    return result.reduce((acc, item) => acc + item, 0);
}

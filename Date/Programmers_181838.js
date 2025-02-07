function solution(date1, date2) {
    const [y1, m1, d1] = date1;
    const [y2, m2, d2] = date2;
        
    const gap = y1 - y2 || m1 - m2 || d1 - d2;
    return (gap < 0) ^ 0;
}

const solution1 = (date1, date2) => new Date(date1) < new Date(date2) ? 1 : 0

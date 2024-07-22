function solution(arr1, arr2) {
    const lengthGap = arr1.length - arr2.length;
    if(lengthGap !== 0)
        return lengthGap > 0 ? 1 : -1;
    
    const sum1 = arr1.reduce((acc, e) => acc + e, 0);
    const sum2 = arr2.reduce((acc, e) => acc + e, 0);
    const sumGap = sum1 - sum2;
    return !sumGap ? sumGap : sumGap > 0 ? 1 : -1;
}
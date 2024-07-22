function solution(arr, flag) {
    const X = [];
    for(let idx = 0; idx < arr.length; idx++){
        if(flag[idx]){
            for(let i = 0; i < arr[idx] * 2; i++)
                X.push(arr[idx]);
        }else{
            X.splice(-arr[idx]);
        }
    }
    return X;
}
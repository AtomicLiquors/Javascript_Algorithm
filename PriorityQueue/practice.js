const input = [2, 5, 1, 4, 3, 7, 6, 8, 9, 0];

const arr = [];

const offer = (arr, value) => {
    let bottom = 0;
    let top = arr.length;

    while(bottom < top){
        const mid = ~~((bottom + top) / 2);
        if(arr[mid] < value)
            bottom = mid + 1;
        else
            top = mid;
    }

    arr.splice(bottom, 0, value);
}

input.forEach((e) => offer(arr, e));

console.log(arr);
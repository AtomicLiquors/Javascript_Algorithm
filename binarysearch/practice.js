const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];

const binarySearch = (arr, key) => {
    let bottom = 0;
    let top = arr.length;

    let mid;
    while(bottom < top){
        mid = bottom + Math.floor((top - bottom) / 2);
        if(arr[mid] < key)
            bottom = mid + 1;
        else
            top = mid;
    }
    return mid;
} 

console.log(binarySearch(arr, 4));
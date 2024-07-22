function solution(arr) {
    let left = 0;
    while(arr[left] !== 2 && left < arr.length){
        left++;
    }
    
    let right = arr.length - 1;
    while(arr[right] !== 2 && right >= 0){
        right--;
    }
    
    return left <= right ? arr.slice(left, right + 1) : [-1];
}

function solution1(arr) {
    const from = arr.indexOf(2);
    const end = arr.lastIndexOf(2);

    return from === -1 ? [-1] : arr.slice(from, end+1);
}

function solution2(arr) {
    if (!arr.includes(2)) return [-1];
  
    let left = 0, right = arr.length - 1;
    while (arr[left] !== 2) left++;
    while (arr[right] !== 2) right--;
  
    return arr.slice(left, right + 1);
  }
var arr = [1,2,3,4,5];

arr.pop(); // 5 -> [1, 2, 3, 4]
arr.shift(); // 1 -> [2, 3, 4]

arr.push(6); // 4(배열의 길이 반환)
arr.unshift(0); // (인자를 맨 앞에 추가하고 배열의 길이 반환)

arr.reverse();
arr.sort();

// 배열 concat
var arr1 = [1,2,3];
var arr2 = [4,5,6]'
arr3 = arr1.concat(arr2);

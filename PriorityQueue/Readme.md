## JavaScript 우선순위 큐
JS는 우선순위 큐가 내장되어 있지 않다.  
직접 구현을 하기에는 너무 복잡하다.  
그렇다고 `Array.sort()`를 사용하게 될 경우 시간 비용, 메모리 비용이 크다.  

따라서 이분탐색과 `.splice()` 메서드로 우선순위 큐에 근접한 비용절감 효과를 낼 것이다.

[원본 링크](https://velog.io/@minh0518/JS%EB%A1%9C-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84-%ED%81%90%EA%B9%8C%EC%A7%80-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-%EA%B7%80%EC%B0%AE%EB%8B%A4%EB%A9%B4-.sort-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EC%B5%9C%EC%A0%81%ED%99%94)

### Array.sort()의 시간 비용
.sort() 메소드의 총 시간복잡도는 `O(NlogN )`이지만,
우선순위 큐의 경우 정렬에 `O(logN)`만 소요된다.

### Array.sort()의 메모리 비용
JS의 .sort()는 Timsort 방식을 채택한다.  
Timsort는 삽입 정렬(Insertion Sort)과 병합 정렬(Merge Sort)을 결합한 알고리즘이다.  
그렇기 때문에 배열의 부분 배열(subarray)을 병합하는 과정이 발생하고 여기서 `O(N)`만큼 추가적인 임시 메모리 공간이 필요하게 된다.  

### 이분탐색 + splice() 구현
구현하고자 하는 것은 "값을 추가할 때마다 정렬 상태가 되는 배열"이다.
1. 배열에다가 이분탐색을 사용해서 추가할 값에 대한 lowerBound를 구한다.
2. 이 lowerBound로 구한 인덱스가 새로운 값이 들어갈 위치이다. .splice() 메소드로 값을 끼워넣는다.

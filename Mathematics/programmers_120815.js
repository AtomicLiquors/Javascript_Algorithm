function solution(n) {
    let pizza = 1;
    //while(pizza * 6 % n > 0){
  
    while(pizza * 6 % n){
        pizza++;
    }
    return pizza;
}

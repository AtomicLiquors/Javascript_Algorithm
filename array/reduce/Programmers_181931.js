const solution = (a, d, included) => 
    included.reduce((acc, v, i) => v ? acc + ( a + d * i ) : acc , 0);
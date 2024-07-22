function solution(my_string) {
    return my_string.match(/\S+/g);
}

const solution1 = my_string => my_string.match(/[^\s]+/g);
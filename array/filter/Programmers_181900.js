function solution(my_string, indices) {
    const cache = [];
    indices.forEach((i) => cache[i] = true);
    return my_string.split('').filter((_, i) => !cache[i]).join('');
}
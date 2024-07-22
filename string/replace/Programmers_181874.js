function solution(myString) {
    return myString.split('').map((e) => e === 'a' ? 'A' : e.match(/[B-Z]/) ? e.toLowerCase() : e).join('');
}

const solution1 = s => s.toLowerCase().replaceAll('a','A');

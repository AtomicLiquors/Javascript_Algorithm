function solution(num_list) {
    let odds = "";
    let evens = "";
    num_list.forEach((num) => {
        num % 2 === 1 ? odds += num : evens += num;
    })
    return +odds + +evens;
}

function solution2(num_list) {
    const { odds, evens } = num_list.reduce(({ odds, evens }, num) => {
        if (num % 2 === 0) {
            evens.push(num)
        } else {
            odds.push(num)
        }
        return { odds, evens }
    }, { odds: [], evens: [] })
    return Number(odds.join('')) + Number(evens.join(''))
}
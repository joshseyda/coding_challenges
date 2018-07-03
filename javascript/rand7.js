const rand5 = () => {
    return Math.floor(Math.random() * 5 + 1);
}

const rand7 = () => {
    const arr = [
        [1, 2, 3, 4, 5],
        [6, 7, 1, 2, 3],
        [4, 5, 6, 7, 1],
        [2, 3, 4, 5, 6],
        [7, 0, 0, 0, 0]
    ];

    let answer = 0;
    while (answer === 0) {
        answer = arr[rand5() - 1][rand5() - 1]
    }
    return answer;
}

rand7();
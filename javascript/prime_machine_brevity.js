function primeTest(number) {

    for (let i = 2; i > (number / 2); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

primeTest(223);
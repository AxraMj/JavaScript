function createCounter(n) {
    let count = n;
    return function() {
        return count++;
    };
}

const n = 10;

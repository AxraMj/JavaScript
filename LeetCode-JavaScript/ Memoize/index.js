function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    const memoizedFunction = function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        callCount++;
        return result;
    };

    memoizedFunction.getCallCount = function() {
        return callCount;
    };

    return memoizedFunction;
}

// Define the functions
const sum = (a, b) => a + b;

const fib = (n) => {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
};

const factorial = (n) => {
    if (n <= 1) return 1;
    return factorial(n - 1) * n;
};

// Example usage
const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

// Testing with the example provided
const fnName = "sum";
const actions = ["call", "call", "getCallCount", "call", "getCallCount"];
const values = [[2, 2], [2, 2], [], [1, 2], []];

const results = [];

actions.forEach((action, index) => {
    if (action === "call") {
        const args = values[index];
        if (fnName === "sum") {
            results.push(memoizedSum(...args));
        } else if (fnName === "fib") {
            results.push(memoizedFib(...args));
        } else if (fnName === "factorial") {
            results.push(memoizedFactorial(...args));
        }
    } else if (action === "getCallCount") {
        if (fnName === "sum") {
            results.push(memoizedSum.getCallCount());
        } else if (fnName === "fib") {
            results.push(memoizedFib.getCallCount());
        } else if (fnName === "factorial") {
            results.push(memoizedFactorial.getCallCount());
        }
    }
});

console.log(results); // Output: [4, 4, 1, 3, 2]

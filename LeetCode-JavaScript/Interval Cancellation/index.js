function cancellable(fn, args, t) {
    let intervalId;

    // Call the function immediately with the provided arguments
    fn(...args);

    // Set an interval to call the function every t milliseconds
    intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Return the cancel function
    return () => {
        clearInterval(intervalId);
    };
}

// Example usage:
const fn = (x) => x * 2;
const args = [4];
const t = 35;
const cancelTimeMs = 190;

const cancelFn = cancellable(fn, args, t);
setTimeout(cancelFn, cancelTimeMs);

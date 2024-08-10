# Memoization in JavaScript

## Overview

This project demonstrates the implementation of a memoized version of a function. Memoization is an optimization technique used to speed up function calls by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

## Function Description

### `memoize(fn)`

Creates a memoized version of the provided function `fn`.

#### Parameters:
- `fn` (Function): The function to be memoized.

#### Returns:
- (Function): A memoized version of the provided function `fn`.

#### Methods::
- `getCallCount()`: Returns the number of times the original function `fn` has been called.

## Example Functions

### `sum(a, b)`

Returns the sum of two integers `a` and `b`.

### `fib(n)`

Returns the nth Fibonacci number. If `n <= 1`, it returns 1. Otherwise, it returns `fib(n - 1) + fib(n - 2)`.

### `factorial(n)`

Returns the factorial of an integer `n`. If `n <= 1`, it returns 1. Otherwise, it returns `factorial(n - 1) * n`.

## Usage

### Creating Memoized Functions

```javascript
const memoize = require('./memoize');

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

// Create memoized versions
const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

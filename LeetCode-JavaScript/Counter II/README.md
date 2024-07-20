# Create Counter Function

This JavaScript module provides a simple counter with methods to increment, decrement, and reset the counter value.

## Usage

### `createCounter(init)`

Creates a counter object with an initial value `init`.

#### Methods

- **`increment()`**: Increases the current counter value by 1 and returns the new value.
- **`decrement()`**: Decreases the current counter value by 1 and returns the new value.
- **`reset()`**: Resets the counter value to the initial value and returns the reset value.

### Example

This example demonstrates how to create a counter and use its methods:

```javascript
const counter = createCounter(5);

console.log(counter.increment()); // Output: 6
console.log(counter.reset());     // Output: 5
console.log(counter.decrement()); // Output: 4

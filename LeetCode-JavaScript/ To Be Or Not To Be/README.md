# Expect Function

This JavaScript module provides a simple assertion library to test values. It includes two main methods: `toBe` and `notToBe`.

## Usage

### `expect(val)`

Creates an expectation object for the given value `val`.

#### Methods

- **`toBe(expected)`**: Checks if the value is strictly equal to the expected value. Throws an error if they are not equal.
- **`notToBe(expected)`**: Checks if the value is not strictly equal to the expected value. Throws an error if they are equal.

### Examples

#### `toBe`

This example demonstrates a successful `toBe` check:

```javascript
try {
    const func = () => expect(5).toBe(5);
    console.log({"value": func()}); // Output: {"value": true}
} catch (e) {
    console.log(e.message);
}

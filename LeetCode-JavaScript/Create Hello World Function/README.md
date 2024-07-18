## Function Usage Example

### Creating a Hello World Function

The `createHelloWorld` function creates and returns a function that, when invoked, returns the string "Hello World".

```javascript
function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

const result = createHelloWorld();
console.log(result()); // Output: "Hello World"

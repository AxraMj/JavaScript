function map(arr, fn) {

    let transformedArray = [];
    
    for (let i = 0; i < arr.length; i++) {

        transformedArray.push(fn(arr[i], i));
    }
    
   
    return transformedArray;
}

const arr = [1, 2, 3];
const plusone = function(n) { return n + 1; };

const newArray = map(arr, plusone);
console.log(newArray); 

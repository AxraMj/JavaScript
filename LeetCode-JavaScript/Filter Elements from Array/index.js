function filter(arr, fn) {
  
    let filteredArray = [];
    
    for (let i = 0; i < arr.length; i++) {

        if (fn(arr[i], i)) {

            filteredArray.push(arr[i]);
        }
    }
    

    return filteredArray;
}


const arr = [0, 10, 20, 30];
const greaterThan10 = function(n) { return n > 10; };

const newArray = filter(arr, greaterThan10);
console.log(newArray); 

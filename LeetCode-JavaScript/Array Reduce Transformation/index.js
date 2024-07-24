function reduce(nums, fn, init) {
    let accumulator = init;

    for (let i = 0; i < nums.length; i++) {

        accumulator = fn(accumulator, nums[i]);
    }

 
    return accumulator;
}


const nums = [1, 2, 3, 4];
const sum = function(accum, curr) { return accum + curr; };
const init = 0;

const result = reduce(nums, sum, init);
console.log(result); 

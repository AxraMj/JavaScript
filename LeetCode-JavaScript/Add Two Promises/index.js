function addTwoPromises(promise1, promise2) {
  return Promise.all([promise1, promise2])
    .then(values => values[0] + values[1]);
}

const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then(result => console.log(result)); 

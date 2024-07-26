function cancellable(fn, args, t) {
  const timerId = setTimeout(() => {
    fn(...args);
  }, t);

  return () => {
    clearTimeout(timerId); 
  };
}


const fn = (x) => x * 5;
const args = [2];
const t = 20;


const cancelFn = cancellable(fn, args, t);


const cancelTimeMs = 50;
setTimeout(cancelFn, cancelTimeMs);

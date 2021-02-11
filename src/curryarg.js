function curry(fn) {
  return function take(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...new1) {
        return take(...args, ...new1);
      };
    }
  };
}

const add = curry(function (a, b) {
  return a + b;
});

console.log(add(2, 3));
console.log(add(2)(3));

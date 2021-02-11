function curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

const add = curry(function (a, b) {
  return a + b;
});

console.log(add(2)(3));

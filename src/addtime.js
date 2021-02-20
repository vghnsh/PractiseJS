Function.prototype.defer = function (x) {
  return (a, b) => {
    setTimeout(() => {
      this(a, b);
    }, x);
  };
};

function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2);

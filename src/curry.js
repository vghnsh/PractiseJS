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

///////////////

function sdd(x,y){
  if(x && y){
    return x+y;
  }
  else{
    return function (z){
      return x+z;
    }
  }
}

console.log(sdd(3,3));
console.log(sdd(3)(3));
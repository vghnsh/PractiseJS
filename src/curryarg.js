// function curry(fn) {
//   return function take(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return function (...new1) {
//         return take(...args, ...new1);
//       };
//     }
//   };
// }


function curry(fn){
return function take(...args){
  if(args.length >= fn.length){
    return fn(...args)
  }
  else{
return function(...z){
return take(...args,...z)
}
  }
}
}






const add = curry(function (a, b,c) {
  return a + b+c;
});

console.log(add(2,3,3));
console.log(add(2)(3)(3));

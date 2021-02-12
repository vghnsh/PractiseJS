Array.prototype.mymap = function () {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
var arr = [1, 2, 3, 4];
console.log(arr.mymap((m1) => m1));

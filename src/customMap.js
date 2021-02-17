Array.prototype.mymap = function () {
  let newA = [];
  for (var i = 0; i < arr.length; i++) {
    newA.push(arr[i]+1);
  }
  return newA;
};
var arr = [1, 2, 3, 4];
console.log(arr.mymap((m1) => m1));

<<<<<<< HEAD
arr = [0, 1, 2, 3, 4];

//arr.forEach((e1,i)=>console.log(e1,i));

Array.prototype.reduceme = function (m1, acc) {
  let sum = acc;
  for (var i = 0; i < this.length; i++) {
    sum += m1(this[i], sum);
  }
  return sum;
};

console.log(arr.reduceme((m1, acc) => m1, 2));
=======
Array.prototype.mymap = function () {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
var arr = [1, 2, 3, 4];
console.log(arr.mymap((m1) => m1));
>>>>>>> parent of 1aa00bd (changes)

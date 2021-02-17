arr = [0, 1, 2, 3, 4];

//arr.forEach((e1,i)=>console.log(e1,i));

Array.prototype.myMap = function (n) {
  let arr1 = [];
  for (let i = 0; i < this.length; i++) {
    arr1.push(n(this[i], i, this));
  }
  return arr1;
};

var callme = arr.myMap(function (n) {
  return n;
});
console.log(callme);

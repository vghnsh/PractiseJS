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

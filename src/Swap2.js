function swap(a, b) {
  let c;
  (c = a), (a = b), (b = c);
  console.log(a, b);
}

swap(10, 12);

///////////////////

//without 3rd variable

function sum(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log(a, b);
}
sum(1, 2);

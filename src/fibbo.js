function fibo(n) {
  let a = 0,
    b = 1,
    c;
  console.log(a);
  console.log(b);
  while (n > 0) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
    n--;
  }
}
fibo(4);

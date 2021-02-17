function facto(n, fact = 1) {
  if (n == 1) {
    return fact;
  } else {
    return facto(n - 1, fact * n);
  }
}
console.log(facto(4));

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


// function fib(n,arr=[],third,first=0,second=1){
//   if(n){
//     return fib(n-1,arr.concat(first),third=first+second,first=second,second=third)
//   }
//   return arr;
// }
// fib(5)


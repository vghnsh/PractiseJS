// function counter() {
//   let count = 0;
//   this.incree = function () {
//     count++;
//     console.log(count);
//   };
//   this.decree = function () {
//     count--;
//     console.log(count);
//   };
// }

// const count1 = new counter();
// count1.incree();
// count1.incree();
// count1.incree();

//const count2 = counter()
//count2();

function countme(){
  let countterop=0;
  this.increee= function(){
    countterop++;
    console.log(countterop);
  }
}

var cont = new countme();
cont.increee();
cont.increee();
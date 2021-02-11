let obj={
  name:'vgh',
  age:21
}
let obj1={
  name:'vgh',
  age:22
}
function taker(ll){
  console.log(this.name+this.age+ll);
}

const binded=taker.bind(obj,'jjk');
binded();
//check2();
//check1();

Function.prototype.mybind = function(...args){
  let obj=this;
  let params = args.slice(1);
  return function (...args2){
    obj.apply(args[0],[...params,...args2]);
  }
}

const binded2=taker.mybind(obj,'kk');
binded2();

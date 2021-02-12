
function plus(a,b){
  this.a = a;
  this.b = b;
}

plus.prototype.plusna = function(){
  return this.a + this.b;
}

var add = new plus(2,3);
console.log(add.plusna());
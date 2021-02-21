
function sum(a,b,cb){
  return cb(a,b);
}

var add = sum(2,3,function(a,b){
  return a+b;
})
console.log(add);
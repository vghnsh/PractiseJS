// var p = new Promise((resolve,reject)=>{
//   let a=2;
//   if(a === 3){
//     resolve('Yes')
//   }
//   else{
//     reject('No')
//   }
// })
// p.then(((p1)=>console.log(p1)))
// .catch((err)=>console.log(err))



function callme(a){
  var l=setTimeout(function(){
    console.log(a);
  },3000)
}
callme('tlkc');

console.log('AAAAA');
console.log('kflskf');


var a = new Promise((resolve,rejcect)=>{
  resolve('1')
})

var b = new Promise((resolve,rejcect)=>{
  resolve('2')
})

var c = new Promise((resolve,rejcect)=>{
  resolve('3')
})

Promise.all([a,b,c]).then((msg)=>console.log(msg))

Promise.race([a,b,c]).then((msg)=>console.log(msg))
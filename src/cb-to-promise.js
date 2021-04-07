// const f = (firstName, callback) => {
//     setTimeout(() => {
//         if (!firstName) return callback(new Error('firstName is required'));
//         const fullName = `${firstName} Turing`;
//         return callback(fullName)
//     }, 2000)
// }

// f('Alan', console.log)
// f(null, console.log)


// const f = (firstName)=>{
//   return new Promise((resolve,reject)=>{
//     if(!firstName){
//       reject('NO name')
//     }
//     resolve('firstName');
//   })
// }

// f('alan').then(console.log)
//f(null).then(console.log)

console.log(!'Gocomet')
console.log(typeof typeof 1); 



// var c = new Promise((resolve,reject)=>{
//   resolve('hi');
//   reject('bye');
// })
// c.then(p1=>console.log(p1))
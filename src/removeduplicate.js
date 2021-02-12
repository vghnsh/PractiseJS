var arr=[1,2,2,3];
let neww = [... new Set(arr)]
console.log(neww);

let aaa=[];
arr.forEach((f1)=>{
  if(!aaa.includes(f1)){
    aaa.push(f1)
  }
});
console.log(aaa);

function addme(){
  arr = [11,2,2,2,3,4];
  let newarr=[];
  for(var i=0;i<arr.length;i++){
    if(arr.indexOf(i)=== -1){
      newarr.push(arr[i]);
    }
  }
  return newarr;
};
console.log(addme());
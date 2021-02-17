let arr = [2,3,4,5,6];
 
function twosum(){
  for(var i=0;i<arr.length;i++){
    for (var j=0;j<arr.length;j++){
      if(arr[i]+arr[j]===7)
      {
        console.log(i,j);
      }
      
    }
  }
}
twosum();
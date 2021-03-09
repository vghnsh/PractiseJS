arr=[1,2,3,4,6];

function check(arr){
  let vir =0,acc=0;
  let m=arr.length+1;
  let tot = m*(m + 1)/2;
  for(var i=0;i<arr.length;i++){
  acc+=arr[i];
  }
  return `${tot-acc}`;
}
check(arr);

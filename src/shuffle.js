let arr = [1,2,3,4,5];
function shuff(arr){ //5 
  for (let i = arr.length-1; i >0 ; i--) {
        const j = Math.floor(Math.random() * (i));
        console.log(j);
        var temp = arr[i]; // 5 = a[4]
        arr[i] = arr[j]; // a[1]=a[1]
        arr[j] = temp; // 
        //[arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
shuff(arr);
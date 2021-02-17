function a_to_ch(ch){
  var result = 'b'.charCodeAt(0);
  console.log(result);
  result = result + 10;
  console.log(result);
  var newResult = String.fromCharCode(result);
  console.log(newResult);
}
a_to_ch();


function assi(a){
  var arr=[];
  for(var i=0;i<a.length;i++){
    arr.push(a.codePointAt(i));
  }
  console.log(arr.join(''));
}
assi('abc');
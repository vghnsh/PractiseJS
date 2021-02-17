function a_to_ch(ch){
  var result = 'b'.charCodeAt(0);
  console.log(result);
  result = result + 10;
  console.log(result);
  var newResult = String.fromCharCode(result);
  console.log(newResult);
}
a_to_ch();
function prime(a){
  let isPirme=true;
  if(a===1){
    console.log('Nethier')
  }
  else if(a>1){
    for(var i=2;i<a;i++){
      if(a%i === 0){
      isPirme =false;
      break;
      }
    }
    if(isPirme){
      console.log('Prime hai')
      }
    else{
      console.log('Nai he')
      }
  }
  else{
    console.log('Not a Prime')
  }
}
prime(12);
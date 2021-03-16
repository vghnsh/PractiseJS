function take(val){
  //delete val.country;
  
  const {country,...rest} = val;
  return rest
}
take({ continent: 'Asia', country: 'Japan', region: 'Kansai' })
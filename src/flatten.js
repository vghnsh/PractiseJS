function flatten(arr){
  let newArr = [];
  arr.forEach(ele =>{
    if(Array.isArray(ele)){
      newArr = newArr.concat(flatten(ele));
    }
    else{
      newArr.push(ele);
    }
})
  return newArr;
}


console.log([[1, 2, 3], [4, 5]].reduce(function(flat, current) {
  return flat.concat(current);
}, []));

console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]
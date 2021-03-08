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

flatten([[1, 2, 3], [4, 5]]); // [1, 2, 3, 4, 5]
flatten([[[1, [1.1]], 2, 3], [4, 5]]); // [1, 1.1, 2, 3, 4, 5]
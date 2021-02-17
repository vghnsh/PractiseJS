function add(a) {
  let count = 1;
  var arr1 = a.split("");
  var arr = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr1[i + 1]) {
      count++;
    } else {
      arr.push(arr1[i]);
      arr.push(count);
      count = 1;
    }
  }

  console.log(arr.join(""));
}

add("aaafffcccc");

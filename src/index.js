var p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

p.then((msg) => console.log(msg)).catch((err) => console.log(err));

function take(a, b) {
  let c = a.toLowerCase().split("").sort().join("");
  let d = b.toLowerCase().split("").sort().join("");
  return c === d;
}
console.log(take("mar", "RAm"));

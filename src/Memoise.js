// A simple memoized function to Add Number
const memoizedAdd = () => {
  let cache = {};
  return (number) => {
    if (number in cache) {
      console.log("Fetching from cache: ");
      return cache[number];
    } else {
      console.log("Calculating result: ");
      let result = number + 10;
      cache[number] = result;
      return result;
    }
  };
};
// returned function from memoizedAdd
const sum = memoizedAdd();
console.log(sum(10)); // Calculating result: 20
console.log(sum(10)); // Fetching from cache: 20

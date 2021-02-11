let count = 1;
let id;
function call() {
  id = setInterval(function () {
    console.log("Hii" + count);
    count++;
  }, 1000);
}
function clear() {
  setTimeout(function () {
    clearInterval(id);
  }, 5000);
}
call();
clear();

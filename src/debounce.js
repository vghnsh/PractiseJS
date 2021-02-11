//<input id='take' type="text" onkeyup="betterFunction()"/>

let count = 0;
function get() {
  console.log("HI" + count++);
}

function debounce(fn, d) {
  let timer;
  return function () {
    let context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context);
    }, d);
  };
}

const betterFunction = debounce(get, 300);

//Run debounce in codepan

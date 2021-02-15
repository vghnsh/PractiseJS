class add {
  constructor(a) {
    this.a = a;
  }
  printa() {
    return "AAA";
  }
}
class multiply extends add {
  constructor(a, b) {
    super(a);
    this.b = b;
  }
  printb() {
    console.log("I am walking" + this.printa(), this.b);
  }
}

var callm = new multiply("Hello", "Vgh");
callm.printb();

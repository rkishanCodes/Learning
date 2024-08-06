debugger;

a();

const username = "Anurag";
const userAge = 25;

var ch = 0;

console.log("beore fun");

function a() {
  console.log("in fun");

  const aa = 14;
  const bb = 12;
  console.log(aa,bb);
  add(7, 9)
}

console.log("after fun");

function add(x, y) {
    kuchhBhi()
    return x + y
}

function kuchhBhi() {
    console.log('Kuchh bhi');
}

console.log("Program Ended");

function x() {
  let a = 0;

  function child(increment) {
    a = a + increment;
    console.log("a:", a); // Print the value of a each time child is called
  }

  console.log("parent a", a);

  return child;
}

const y = x();
const y2 = x();

y(1); // Prints: a: 1
y(12); // Prints: a: 2
console.dir(y);

y2(); // Prints: a: 1
console.dir(y2);

y(1); // Prints: a: 3
console.dir(y);

x();

y(15); // Prints: a: 3
console.dir(y);




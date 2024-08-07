// //higher order function
// function a(b) {
//   console.dir(b);
//   b();
// }

// //callback function
// a(ch);

// function ch() {
//   console.log("Hello World");
// }

// // function multiplier(factor) {
// //   return function (number) {
// //     console.log(factor);
// //     return number * factor;
// //   };
// // }

// // const double = multiplier(2);
// // console.log(double(5)); // Output: 10

// const person = {
//   name: "Alice",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "Wonderland",
//     country: "Fantasy",
//   },
//   hobbies: ["reading", "gardening", "biking"],
// };

// console.dir(person);

function x() {
  const a = 0;

  let b = 1;

  function child() {
    console.log(b);
    console.log(a);
  }

  return child;
}

const y = x();

console.dir(y);

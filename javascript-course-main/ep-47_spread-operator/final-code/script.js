const nums1 = [1, 2, 3, 4];
const nums2 = [5, 6, 7, 8, 9];

console.log([...nums1, ...nums2]);

const myName = "Anurag";

const joinedArray = [...nums1, ...nums1, 10, 11, 12];

const user = {
  name: "Anurag",
  age: 25,
};

const updatedUser = { user };// this will create obj with user obj but with spread operator all props will be passed on
console.log(updatedUser);

function add() {
  console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }

  return sum;
}

const person = { name: "Alice", age: 25, work: "onsite" };
const additionalInfo = {
  city: "New York",
  occupation: "Engineer",
  work: "offsite",
  ...person,
};

// Merge objects
const updatedPerson = { ...person, ...additionalInfo };
console.log(updatedPerson);
// { name: 'Alice', age: 25, city: 'New York', occupation: 'Engineer' }

// Add new property
const updatedPersonWithAge = { ...updatedPerson, age: 26 };
console.log(updatedPersonWithAge);
// { name: 'Alice', age: 26 }

// (function(name) {
//   var message = 'Hello, I am inside an IIFE!';
//   console.log(message,name);
//   return message;
// })("kishan");

// var MyModule = (function() {
//   var privateVar = 'I am private';

//   return {
//     publicMethod: function() {
//       console.log(privateVar);
//     }
//   };
// })();

// MyModule.publicMethod(); // Logs: I am private
// // Trying to access `privateVar` directly will result in an error
// // console.log(MyModule.privateVar); // undefined



const numbers = [1, 2, 3, ];

function sum(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  return a + b + c + d + e;
}

const result = sum(...numbers); // Equivalent to sum(1, 2, 3, 4, 5)
console.log(result); // 15
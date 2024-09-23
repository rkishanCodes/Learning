// const username1 = 'Anurag'
// let username2 = username1
// username2 = username2 + ' Singh'

const fruits = ["Mango", "Apple", "Orange"];

const myFruits = fruits;

// myFruits.push('Dates')
// myFruits.push('Grapes')

// Object.assign(myFruits, fruits)
// const myFruits = [...fruits];

// const myFruits = [].concat(fruits)
// const myFruits = fruits.slice()

const user1 = {
  firstName: "Anurag",
  lastName: "Singh",
  pata: {
    city: "Delhi",
    pincode: 989888,
  },
  subject: ["Physics", "CS", "Maths"],
};

// Shallow Copy

// const user2 = {};
// Object.assign(user2, user1);
const user2 = { ...user1 };

// const aaa = {
//   firstName: "John",
//   lastName: {
//     kish: "awesome",
//     awesome: {
//       kishan: "awesome",
//     },
//   },
// };

// const bbb = a;

const original = { oru: 1, naal: { c: 2 } };

// Creating a deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.naal.c = 3;
deepCopy.oru = 3;

console.log(original.naal.c); // Output: 2 (original is not affected)
console.log(deepCopy.naal.c); // Output: 3

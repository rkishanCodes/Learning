const fruits = ["banana", "apple", "peach", "mango", "grapes"];

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// console.log('*************************');

// for(const fruit of fruits) {
//     console.log(fruit);
// }

const user = "Anurag Singh";

// for(const letter of user) {
//     console.log(letter);
// }

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  city: "Bangalore",
  key: "ch",
};

// for (const key in person) {
//   console.log(key, ": ", person[key]);
// }
// for (const key in user) {
//   console.log(key, ": ", user[key]);
// }

const personKeys = Object.keys(person);
// console.log(personKeys);
const personValues = Object.values(person);
// console.log(personValues);
const personEntries = Object.entries(person);
console.log(personEntries);
for (const key of personKeys) {
//   console.log(key);
//   console.log(person[key]);
}


for (const key of personEntries) {
  console.log(key);
  const [a,b]=key
  console.log(a,b);
//   console.log(person[key]);
}

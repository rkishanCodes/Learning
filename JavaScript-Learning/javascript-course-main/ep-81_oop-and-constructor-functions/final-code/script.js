// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     // getBirthYear: createUser.commonMethods.getBirthYear
//   }
//   return user
// }

// createUser.commonMethods = {
//   getBirthYear() {
//     return new Date().getFullYear() - this.age
//   },
// }

function CreateUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

CreateUser.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};
// CreateUser.getBirthYear = function () {
//   return new Date().getFullYear() - this.age;
// };

console.dir(CreateUser);

// CreateUser.prototype.getFullName = function() {
//   return this.firstName + ' ' + this.lastName
// }

const user1 = new CreateUser("Aman", "Mishra", 32);
console.dir(user1);

const user2 = new CreateUser("Anurag", "Singh", 72);

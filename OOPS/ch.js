// debugger;

function context(name) {
  this.name = name;
}

function createUser(name, count) {
  //   console.log(this);
  //   this.name = name;
  context.call(this, name);

  this.count = count;
}

createUser.prototype.increment = function () {
  this.count++;
  console.log(this.count);
  console.log("fi,rst  ");
  console.log(user1);
};

const user1 = new createUser("kishan", 21);
const user2 = new createUser("kishan", 21);

console.log(user1);

Object.prototype.a = "now Create User1";

// console.log(user1.a);

user1.__proto__.b = "now Create User2";
// console.log(Object().__proto__.a);

// console.log(this);

//   console.log(user1)
// console.log(user1);
// user1.increment();

function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

// function createUser(username, email, password) {
//   SetUsername.call(this, username);

//   this.email = email;
//   this.password = password;
// }

// const chai = new createUser("chai", "chai@fb.com", "123");
// console.log(chai);

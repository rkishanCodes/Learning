function getAgeYear() {
  console.log("age");
}

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear,
  };
  return user;
}

const user1 = createUser("Aman", "Mishra", 32);
const user2 = createUser("Anurag", "Singh", 72);

// console.log(user1.getAgeYear());

const arr1 = [1, 2];
const arr2 = [3, 4];

document.querySelector("li").addEventListener("click", function (e) {
  console.log(this);
  console.log(e.target);
});

function a(name) {
  this.name = name;
}

name1 = new a("kishan");

console.log(name1);

console.log(a.prototype);

a.prototype.hello = function () {
  console.log("hello");
};
console.log(a.prototype);

console.log(name1.__proto__);

console.log(a.prototype===name1.__proto__);

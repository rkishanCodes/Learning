function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear() {
      return new Date().getFullYear() - user.age;
    },
  };
  return user;
}

const user1 = createUser("Aman", "Mishra", 32);
const user2 = createUser("Anurag", "Singh", 72);

const arr1 = [1, 2];
const arr2 = [3, 4];

class a {
  namew = "noise";
  constructor(name) {
    this.name = name;
    console.log("object", this.name);
  }

  speak() {
    console.log("I'm speaking", namew);
  }
}

obj = new a("kiki");

const ch = {
  "#age": 34,
};



console.log(document.querySelector('li').innerText);
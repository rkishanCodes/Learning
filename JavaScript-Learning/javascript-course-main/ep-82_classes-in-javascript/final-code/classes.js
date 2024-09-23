class createUser {
  #age;
  constructor(firstName, lastName, age) {
    console.log("constructor");
    this.firstName = firstName;
    this.lastName = lastName;
    this.#age = age;
  }

  #hi = "hi";

  static bi = "bye";

  static {
    console.log("object");
    console.log(this);
    this.getBirthYear = function () {
      // this.getFullName();
      return new Date().getFullYear() - this.age;
    };
  }

  getFullName() {
    return this.firstName + " " + this.lastName + bi;
  }
}

console.dir(createUser);

const user1 = new createUser("Aman", "Mishra", 32);

console.log(user1);
const user2 = new createUser("Aman1", "Singh", 72);

const a = {
  "#name": "Aman",
};

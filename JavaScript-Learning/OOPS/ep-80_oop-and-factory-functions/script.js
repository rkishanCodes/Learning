const user = {
  firstName: "Anurag",
  lastName: "Singh",
  age: 25,
};

function createUser(name, age) {
  const user = {
    name,
    age,
    ager(){
      return user.age
    }
  };
  return user;
}

const user1= createUser("a",2)
console.log(user1.age)
console.log(user1.ager())

const arr1=[3,4]
const arr2=arr1

const a={1:2}
const b=a
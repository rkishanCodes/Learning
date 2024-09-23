// const tinderUser=new Object()//single ton
const tinderUser={}//non singelton object
console.log(tinderUser);

tinderUser.id="123"
tinderUser.name="ABC"
tinderUser.isLoggedIn="true"

console.log(tinderUser);

const regualrUser={
  email:"abs@gmail.com",
  fullname:{
    userFullName:{
      firstName:"kishan"
    }
  }
}

console.log(regualrUser.firstName);// reutns underfined as there no prorerty as fist child

console.log(regualrUser.fullname);
console.log(regualrUser.fullname.userFullName.firstName);
console.log(regualrUser["fullname"]["userFullName"]["firstName"]);

const obj1={
  1:1
}

const obj2={
  2:2
}

// const obj3={obj1,obj2}// same as expected from [[],[]]
// console.log(obj3);


const obj3=Object.assign(obj1,obj2)//to ensure taraget will be {}
console.log(obj3,Object.values(obj3)[1]);
console.log(obj1);
console.log(obj1===obj3);// its because obj1 and obj 2 is conacted as obj1 is affected as it has targetd

const obj4=Object.assign({},obj1,obj2)//to ensure taraget will be {}

// console.log(obj4)
// console.log(obj1)
//comment above(obj3) to see diff 

const obj5={...obj1,...obj2}
console.log(obj5);

console.log({...obj1})

console.log(Object.keys(obj1),"key")// returns array
console.log(Object.values(obj1))
console.log(Object.entries(obj1))
console.log(Object.entries(obj1).flat())

console.log(obj1.hasOwnProperty(1))

const ch = {
  name: "kishan",
  age: 20,
  address: "kathmandu",
};





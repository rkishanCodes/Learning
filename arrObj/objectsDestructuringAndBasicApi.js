const user={
  id:123,
  name:"abc",
}

// console.log(user.name);// everytime can access proerties

// const userName=user["gds"]|| user.name // its nice the or
//other also we can do

// const {userName}= user gives undefined

const {name}=user // obj destructuring basically extracts name property
console.log(name);
console.log( typeof name);

//user defined varaible
// const {name:userName}=user
// console.log(userName);

const [userId,userName]=Object.values(user)// using array destructuring

console.log(typeof userId,userName);
console.log(userName);

// const navbar=(a)=> //extracts compnay property
// {
// console.log(a)
// const name=a.company
// console.log(name);
// }
//instead of doing all this we will destrucuting

const navbar=({company})=>{

}


navbar({company:"kishan"})//object is passed


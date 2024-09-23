// const name="kishan"

// for (const iterator of name) {
//   console.log(iterator);
// }

// const str = "Hello world ";
// const specialChar = "-";
// const replacedStr = str.replace(/\s/g, specialChar);

// console.log(replacedStr); // Output: Hello-world

// const num=[1,2,3]
// let sum=0
// for(let i of num){

//   sum+=i
//   console.log(sum);

// }

const obj={
  name:"kishan",
  age:20,
  city:"delhi"
}

for(let i in obj){
  console.log(i) // gives keys
  console.log(obj[i]) // gives values
}
//primitive

//7 types: String, Number, Boolean, null(empty), undefined(no value), Symbol, BigInt



//JavaScript is a dynamically typed language
//let x = 5; // x is a number
//x = "Hello"; // Now x is a string

//to decalre var

const score=100
const scoreValue=100.3
const isLoggedIn=false
let userEmail;

const id=Symbol(1)
console.log(id);

const anotherId=Symbol(1)
console.log(anotherId);

console.log(id==anotherId)
//d and anotherId are two different symbols, even though they were created with the same
// argument 1. Each call to Symbol() creates a unique symbol, and the argument is just a description
// and doesn't affect the uniqueness of the symbol.

const bigNumer=1233443982098432093n// or const bigNumber = BigInt("1233443982098432093");

console.log(typeof bigNumer);



//Reference(non primitive) typeof will be object
// Array, Object, Functions

const numbers=[1,2,3,4]

const sq={
  1:1,
  2:4,
  email:"jds;kjab;kj",
  2:"kg;ksem"
}

const myFunction=function(){
  console.log("hello")
}
 
console.log(typeof []);//typeof reports it as an "object" because arrays in JavaScript are a type of object.

console.log(typeof numbers)

console.log(sq[2])// for nnumber use [] to access in object properties
console.log(sq.email)//for varibale use . dot operator to access in object properties
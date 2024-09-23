//condition ? expressionIfTrue : expressionIfFalse


// const result=(true==true?console.log("true"):console.log("true"))

// console.log(result);// undefined

//imp

// Value of result: in above ternary operation doesn't return a value;
// it executes either the expression before the : or the expression after the : 
//based on the condition. In JavaScript, if a function doesn't explicitly return a value, it implicitly returns undefined. 
//Therefore, result will be undefined.

// const result=18?"18":"not 18";
// console.log(typeof result);

// const result=18?function(){
//   console.log("18");
//   return 18
// }:function(){
//   console.log("not 18");
// };
// console.log( result);
// console.log( result());

// const result=18?((name)=>{
//   console.log("18");
//   console.log(name);
//   return 18

// })():()=>{ // close the function then invoke
//   console.log("not 18");
// };

//condiotn is checked and expresion will assigned

const result = 18 ? ((name) => {
  console.log("18");
  console.log(name);
  return 18;
})() : () => {
  console.log("not 18");
};

console.log( result);
// console.log( result("kishan"));
//: The first function expression (name) => {...} is immediately invoked (()) after its declaration. 
//This means it executes immediately, returning 18 and assigning it to result.


const result1 = 0 ? ((name) => {
  console.log("true");
  console.log(name);
  return 18;
})() : () => {
  console.log("not 18");
  return false
};

console.log( result1());
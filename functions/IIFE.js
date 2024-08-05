//IIFE : Immediately Invoked Function expression
// encapsulate code
//create a private scope
//And avoid polluting the global namespace.

//The function is defined inside parentheses to create a function expression./to deine function
//The entire function expression is enclosed in an additional set of parentheses (function(){...}).
//The final pair of parentheses () immediately invokes the function.

// (function(name){
//   console.log(`welcome ${name}`)
// })("kishan"); // if not given TypeError: (intermediate value)(...) is not a function 

// ( function(name){
//   console.log(`welcome ${name}`)
// })("kishan"); // if not given TypeError: (intermediate value)(...) is not a function 

// a()//TypeError: a(...) is not a function

// const a = (function(name) {
//   console.log(`Welcome ${name}`);
// })("Kishan");
// it has executed
//but doesn not return any value
// console.log(a);// undefined as nothing has returned
//a() //so gives type error


const a = (function(name) {
  // console.log(`Welcome ${name}`);
  // console.log("Inside function a");

  return function() {
    console.log("Function a is called again.");
  };
})("Kishan");

a();

console.log(typeof a);
//a => is reference
//a() => is execution




// a(); // Output: Welcome Kishan TypeError: a is not a function as a is not returning anything
// logs "Welcome Kishan" and "Inside function a".
//No return statement is used, so the IIFE doesn't return anything.
//Therefore, a is not assigned a function; it's assigned undefined.






// parenthsis acts like block 

// (this is function defination)(to invoke the function) 

//to elimante global scope polution

// (()=>{
//   console.log("arrow function")
// })()

// var arr;
// console.log(arr);
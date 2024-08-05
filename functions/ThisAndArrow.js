// const user={
//   userName:"kishan",
//   welcomeMessage:function(){
//     // console.log(`welcome user ${userName}`);//ReferenceError: userName is not defined
//     console.log(`welcome user ${this.userName}`);//dynamic reference to the object instance.
//     // console.log(`welcome user ${user.userName}`);

//     console.log(this);
//   }
// }

// user.welcomeMessage()

// console.log(`welcome user ${this.userName}`); // Refers to the global object  which is window
// // returns undefined 

// console.log(`welcome user ${this}`);

// console.log(`welcome user ${user.userName}`); // Refers to the userName property of the user object
// user.welcomeMessage()

// user.userName="Bharath"

// // console.log(`welcome user ${user.userName}`);
// user.welcomeMessage()

// console.log(this) // in node gives empy obj as refers to  global object


// function hello(){
//   let userName="kishan"
//   console.log(this);
//   console.log(this.userName);// undefined

// }


// const hello=function (){
//   let userName="kishan"
//   console.log(this);
//   console.log(this.userName);// undefined

// }
// hello()

//same result

// const hello= ()=>{
//   let userName="kishan"
//   console.log(this);
//   console.log(this.userName);// undefined

// }
// hello()// gives {}


// // Arrow function at the global level
// const arrowFunction = () => {
//   console.log(this); // Refers to the global object (window in a browser or global in Node.js)
// };

// arrowFunction();

// // Regular function at the global level
// function regularFunction() {
//   console.log(this); // Refers to the global object (window in a browser or global in Node.js)
// }

// regularFunction();

// const user = {
//   userName: "kishan",
//   welcomeMessage: function () {
//     console.log(`welcome user ${this.userName}`);
//     console.log(this);

//     // Invoking the arrow function to utilize its lexical scoping
//     (() => {
//       console.log(this); // Refers to the user object
//     })();
//   },
//   lexical: () => {
//     console.log(this); // Refers to the global object (lexical scoping in arrow function).
//   }
// };

// user.welcomeMessage();
// user.lexical();

//explicit return
// const add=()=>{
//   return 1+1
// }

// //implict return
// const add=()=>1+1

// console.log(add())

// const userName=(user)=>{
//    return console.log(user);// prints and returns undefined
// }

// console.log(userName("kishan"))


// const obj=()=>{name:"kishan"}//in an arrow function without parentheses, JavaScript considers it as a block of code rather than an object literal.
// const obj=()=>{ return {name:"kishan"}}

const obj=()=>({name:"kishan"})



console.log(obj())


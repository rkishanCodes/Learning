//syntax

// const { log } = require("async");

// const { reject } = require("async");

// const { reject } = require("async");

// async function (param0) {
//   statements
// }
// async function (param0, param1) {
//   statements
// }
// async function (param0, param1, /* …, */ paramN) {
//   statements
// }

// async function name(param0) {
//   statements
// }
// async function name(param0, param1) {
//   statements
// }
// async function name(param0, param1, /* …, */ paramN) {
//   statements
// }


// async function  hi(a){
//   console.log("async function");

// //   return new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //       console.log(a);
// //       resolve(a);
// //     },3000)
// //   }) // If the function throws an error or rejects a Promise, the returned Promise will be rejected with that error.
// // }

// return a;
// }
//Async Execution: Async functions execute asynchronously, meaning they don't block the event loop while waiting for asynchronous operations to complete.
//Instead, they return control to the caller and continue executing other code.

//Awaiting Promises: Inside an async function, you can use the await keyword to pause execution until a Promise is settled. This makes async functions particularly useful for working with Promises and handling asynchronous code in a more synchronous-like manner.


// console.log(hi())

// async function awaitex(){
//   console.log("before await");
//   const hii=await hi(10)//The resolved value of the promise is treated as the return value of the await expression.  reutnr the value not the promise
//   console.log("after await await");
//   console.log(typeof hii);

// }

// awaitex()



// async function foo() {
//   return 1;
// }
// //bith are asimilar but not same dont have same reference
// function foo() {
//   return Promise.resolve(1);
// }


// const p = new Promise((res, rej) => {
//   res(1);
// });
// // console.log(p);
// async function asyncReturn() {
//   return p// gives diiference reference
// }

// setTimeout(()=>{
//   const asyncp=asyncReturn();
//   asyncReturn().then(result => {
//     console.log(result); // Output: 1
//   });
  
//   console.log(asyncp);

// },1000)

// function basicReturn() {
//   return Promise.resolve(p);
// }

// console.log(basicReturn());

// console.log(p === basicReturn()); // true
// console.log(p === asyncReturn()); // false


// async function ch1(){

//   console.log("aysn1 executed");
//   // setTimeout(()=>{
//   //   console.log("async1 set executed");
//   // },2000)
//    throw new Error(" hii")
// }


// ch1().then((data)=>{
//   console.log("aysn1 then executed ",data);
// },(error)=>{
//   console.log(" sgkjbkjsg;skjb ",error);
// })

// ch1().catch((error)=>{
//   console.log("caught ",error);
// }
// )


// async function promiseTest(){
//   return new Promise((resolve,reject)=>{
//     // console.log("async1 promise")̦
//     resolve("exe test")
//     // reject("exe test reject")
//   })
// }

// const prt=promiseTest();

// prt.then((data)=>{
//   console.log(data);
//   // console.log(prt);
// })

// prt.catch((error)=>{
//   console.log(error);
//   console.log(prt);
// })


// async function promiseTest2(){
//   return prt
// }
// setTimeout(()=>{
//   prtDemo=promiseTest2()
//   // console.log(prtDemo);
//   // console.log(prt);
//   // console.log(prt==prtDemo);
//   console.log('prt demo ',prtDemo);

//   prtDemo.then((data)=>{
//     console.log(data);
//     console.log("prt demo",prtDemo);
//   })

// },2000)


// async function ch(){
//   return new Promise(()=>{
//     console.log("done exee");
//   })
// }

// const chValue=ch()

// console.log(chValue);
// chValue.then(()=>{
//   console.log("done");
// });
//In your code, the ch function returns a promise, but the promise is never resolved or rejected explicitly within the function. As a result, the promise returned by ch() is in a pending state indefinitely, and the .then() block is never executed.


// async function ch(){
//   return new Promise((resolve)=>{
//     console.log("done exee");
//     resolve()
//   })
// }

// const chValue=ch()

// console.log(chValue);
// chValue.then(()=>{
//   console.log("done");
// });


//setTimeout schedules a function to run after a specified delay, which in this case is 0 milliseconds. However, it doesn't mean that the function will execute immediately; instead, it will be placed in the event queue and executed after all currently executing code has finished, even if the delay is set to 0.

// setTimeout(()=>{
//   console.log("done");
// },0)
// console.log("hi")





// console.log(Promise.resolve(42));//return promisis whihc is fullied



// const reason = new Error('Something went wrong');

// const rejectedPromise = Promise.reject(reason);

// rejectedPromise.catch(error => {
//   console.error('Promise rejected with error:', error);
// });

// console.log(Promise.reject( new Error('Promise rejected')))


// const p = new Promise((res, rej) => {
//   res(1);
// });




// async function asyncReturn() {
//   return p;
// }

// setTimeout(()=>{
//   const asyncReturnvalue = asyncReturn()


//   console.log("before then ",asyncReturnvalue)


//   asyncReturnvalue.then(()=>{
//   console.log("done");
//   console.log("during then ",asyncReturnvalue);

// })
// console.log("after then ",asyncReturnvalue)

// },2000)






// // function basicReturn() {
// //   return Promise.resolve(p);
// // }

// // console.log(p === basicReturn()); // true
// // console.log(p === asyncReturn()); // false


const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false

console.log(Promise.resolve(p)==p);// it resutrns same promise




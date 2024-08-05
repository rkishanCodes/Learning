// try {
//   // Code that may throw an exception
//   const a=10;
//   a/0;
//   throw new Error("An error occurred");
// } catch (error) {
//   // Code to handle the exception
//   console.error("Caught an error:", error.message);
// } finally {
//   // Code that will always execute
//   console.log("Finally block executed");
// }



// const promiseOne=new Promise();
// object, a callback function is typically required. This callback function is passed as an argument to the Promise constructor and is executed immediately by the constructor. The callback function takes two arguments, resolve and reject, which are functions provided by the JavaScript engine.


// const promiseOne=new Promise((resolve,reject)=>{
//   console.log(typeof resolve);
//   console.log(reject);

//   setTimeout(()=>{
//     console.log("asyn exe");
//     resolve(10);
//     // console.log( promiseOne);

//   },1000)
//   // console.log( promiseOne); //The promiseOne variable is not accessible until the Promise constructor is fully executed.

// });


// console.log( promiseOne);

//In JavaScript, the then() method is used with promises to handle the result of asynchronous operations once the promise is fulfilled or rejected.

// It takes two optional callback functions as arguments: one for the fulfillment case and one for the rejection case.

//takes callback as argument

//The setTimeout() function inside the Promise constructor delays the execution of its callback function for 1 second. However, the then() method is called immediately after the Promise constructor without waiting for the asynchronous operation to complete.

//Whatever value you pass to resolve() becomes the fulfillment value of the promise, which is then passed as an argument to the success callback of then().
// promiseOne.then((value)=>console.log(value))


//In JavaScript, the Promise constructor takes a function as an argument to allow for the definition of asynchronous operations. This function is sometimes referred to as an "executor function" or "resolver function."

// new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("asyn executed");
//     resolve("compledted")
//   },100)
// }).then((value)=>{
//   console.log(value);
// })

// const promiseThree= new Promise((ressolve,reject)=>{
//   setTimeout(()=>{
//     console.log("async exe");
//     ressolve({
//       name:"kishan",
//       age:22
//     });
//   },10)
// })

// promiseThree.then((data)=>{
//   console.log(data.name);
// })

// const promiseFour= new Promise((ressolve,reject)=>{
//   setTimeout(()=>{
//     let error=true;
//     if(!error){
//     ressolve({
//       name:"kishan",
//       age:22
//     });
//   }
//   else{
//     // reject("rejected")
//     // reject(throw new Error("rejected"));
//     //The reason reject(throw new Error("rejected")); is not possible is because throw new Error("rejected") is a statement that immediately throws an error, and it cannot be used as an argument to a function like reject.
//     // throw new Error("rejected")
//   }
//   },10)
// })

// promiseFour.then((data)=>{
//   console.log(data.name);
// })

// promiseFour.catch((error)=>{
//   console.log(error);
// })


// promiseFour.then(
//   (data) => {
//     console.log(data.name);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// Or, handle rejection with catch
// promiseFour.catch((error) => {
//   console.log(error);
// });

// promiseFour.then((data)=>{
//   console.log(data.name);
// },(error)=>{
//   console.log("error",error.message);
// })

//issue is seperately i can use catch , but if im using then i should two calllback argument i foe is passed it wlll reaise an error


// const ch = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({
//         name: "kishan",
//         age: 22
//       });
//     } else {
//       // throw new Error("rejectvvsed"); // Throw an error to reject the promise
//     }
//   }, 100);
// });

// const name=ch.then(
//    (data) => {

//     console.log(data.name);
//     // return data.name; //The then() method of a promise returns a new promise. 
//     throw new Error("Intentional rejection");

//   }
// );

// Continuing the chain with another then() method
// name.then((nameValue) => {
//   console.log("Name value:", nameValue);
// }).catch((error) => {
//   console.error("Error occurred:", error);
// });


// ch.catch((error) => {
//   console.log(error);
// });
// setTimeout(()=>{
//   console.log(  name);// then returns object

// },2000)// Or, handle rejection with catch
//Creating a Promise with then(): When you call the then() method on a promise, you're not explicitly creating a new promise yourself. Instead, the then() method creates and returns a new promise internally based on the result of the callback function you provide to it.


// const promiseFour = new Promise(function(resolve, reject){
//   setTimeout(function(){
//       let error = false
//       if (!error) {
//           resolve({username: "hitesh", password: "123"})
//       } else {
//           reject('ERROR: Something went wrong')
//       }
//   }, 100)
// })

// promiseFour.then((data) => {
//   console.log("exe");
//   return data.username
// }

//You are able to access username as an argument in the second then() method because the value returned from the first then() callback function becomes the resolved value of the promise returned by the first then().
// Yes, that's correct. When you return a value or throw an error inside a then() method, it does indeed create a new promise.
//so in a nutshell if we return or throw new error In then it will Create a new promise


// ).then((username) => {
//   console.log(username);

// })

// promiseFour.then((data) => {
//     console.log("exe");
//     throw new Error("Some error occurred"); // Simulate an error by throwing an error
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.error("Error occurred:", error); // Handle the error here
// }).finally(() => {
//     console.log("Finally block executed");
// });


// promiseFour.then((data) => {
//   console.log("exe");
//   throw new Error("Some error occurred"); // Simulate an error by throwing an error
// }).then((username) => {
//   console.log(username);
// }).catch((error) => {
//   console.error("Error occurred:", error); // Handle the error here
//   // return "Recovered from error"; // Returning a value from catch this will be in then becase didnt raist any error
//   throw new Error("Some error occurred"); // Simulate an error by throwing an error


// }).then((result) => {
//   console.log("Result:", result);
// }).catch((error) => {
//   console.error("Another error occurred:", error); // Handle another error here
// });


// const chname=promiseFour.then(
//   (data) => {

//    console.log("hi");
//    return 1
   

//  }
// );

//in a nuthshell if reject() is callback i neeed cathc, or resole is callbaked in then, oresle it will raise error




// const ch2=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("exe 2");
//   },1000)
// })

// const ch1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       console.log("exe 1");
//       // console.log("promise is executing ", ch1);

//       resolve(1);
//       // reject();
//   }, 1000);
// });

// ch1.then(() => {
//   console.log("successfully executed ",ch1);
//   console.log(Object.keys(ch1));
// }
// // ,()=>{
// //   console.log("erroe in using then ");
// // }
// )
// ch1.catch(()=>{
//   console.log("error occured");
// }
// )
// using catch and then separent will laed warning error , together will same as execpetd output , if still want to use separate then then should have both thr callbacl argument



// chaining

// const ch1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("exe 1");
//         // reject();

//         resolve();
//     }, 1000);
//   });
  
// const thenReturned=  ch1.then(() => {
//     console.log("successfully executed");
//     return "then resutnred";
//   }
//   // ,()=>{
//   //   console.log("erroe in using then ");
//   // }
//   )
//   .then((value)={
// console.log(value);
//   }
// )
//   .catch(()=>{
//     console.log("error occured");
//   }
//   )

//   setTimeout(()=>{
//     console.log(thenReturned);
//   },2000)

// const thenReturned = ch1.then(() => {
//   console.log("successfully executed");
//   return "then returned";
// }).then((value) => {
//   console.log(value); // Output: "then returned"
//   return "second then returned";
// }).catch(() => {
//   console.log("error occurred");
// });

// setTimeout(() => {
//   console.log('thenReturned ',thenReturned);
// }, 2000);


// const ch1 = new Promise((resolve, reject) => {
//       setTimeout(() => {
//           console.log("exe 1");
//           // reject();
  
//           resolve('then returned');
//       }, 1000);
//     });

//     const samePromiseThenReturn = ch1.then(()=>{
//       console.log("successfully executed");
//       console.log("first promise ", ch1);
//       return "then returned";
//     })

//     samePromiseThenReturn.then((value)=>{
//       console.log("then of samePromiseThenReturn ",value);
//     })

//     setTimeout(()=>{
//       console.log(samePromiseThenReturn);
//       console.log(samePromiseThenReturn==ch1);
//     },1500)


// const ch1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       console.log("exe 1");
//       // reject();

//       resolve('resolved');
//   }, 1000);
// }).then(()=>{
//   console.log("then executed");
//   console.log('old  promise ',ch1);
// })

//if we chain for promoise then promise will be peding since it will asynchronous


// const ch1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       console.log("exe 1");
//       // reject();

//       resolve('resolved');
//   }, 1000);
// }).then(()=>{
//   console.log("then executed");
//   console.log('old  promise ',ch1);
//   return "then returned";
// })

// setTimeout(() => {
//   console.log('thenReturned ',ch1);
// }, 2000);

//in a nutshell chaining will result in a new promise



// const ch1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       console.log("exe 1");
//       reject("rejected");

//       // resolve('resolved');
//   }, 1000);
// }).then(()=>{
//   console.log("then executed");
//   console.log('old  promise ',ch1);
//   return "then returned";
// }).catch(()=>{
//   console.log("error cocued succeffully");
//   // return "error cocued succeffully"; // its in chaning in oroginall so when used the promise so it will undefined if didnt use reutrn
//   throw new Error("throwed error successfully ")
// })

// setTimeout(() => {
//   console.log('thenReturned ',ch1);
// }, 2000);

// const ch2=new Promise((resolve, reject) => {
//   setTimeout(() => {
//       console.log("exe 2");
//       reject("rejected");

//       // resolve('resolved');
//   }, 1000);
// })

// ch2.catch(()=>{
//   console.log("rejected ",ch2); 
// })

console.log(Promise.resolve(42));

const resolvedPromise = Promise.resolve(42);
resolvedPromise.then((value) => {
    console.log(value); // Output: 42
});


// console.log(Promise.reject("oops "))
const rejectedPromise = Promise.reject("Something went wrong");
rejectedPromise.catch((reason) => {
  console.error(reason); // Output: Something went wrong
});

// async function delay() {
// async function delay() {
//   return new Promise((resolve, reject) => {
//       // resolve("hi");
//   });
// }

// const { log } = require("async");


// async function greet(){
// console.log("start");
// await delay().then((data) => console.log(data))
// console.log("end");
// }

// greet()

// async function foo() {
//   await 1;
// }


// console.log( foo().then((data)=>{
//   console.log(data);
// }));

//Code after each await expression can be thought of as existing in a .then callback. In this way a promise chain is progressively constructed with each reentrant step through the function. The return value forms the final link in the chain.

// function foo() {
//   return Promise.resolve(1).then(() => "hi");
// }

// foo().then((data) =>{console.log(data)})

// const promise1 = Promise.resolve(1);
// const promise2 = Promise.resolve(2);
// const promise3 = Promise.resolve(3);

// Promise.all([promise1, promise2, promise3])
//   .then(values => {
//     console.log( values); // Output: [1, 2, 3]
//   })
//   .catch(error => {
//     console.error(error); // This will not execute in this example because all promises resolve successfully
//   });


function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");// use whereever it shows promiseis fullfiledd
      console.log("fast promise is done");
      for(let i = 0; i <100;i++){
        console.log(i);
      }
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("== sequentialStart starts ==");

  // 1. Start a timer, log after it's done
  const slow = resolveAfter2Seconds();
  console.log(await slow);

  // 2. Start the next timer after waiting for the previous one
  const fast = resolveAfter1Second();
  console.log(await fast);

  console.log("== sequentialStart done ==");
}

async function sequentialWait() {
  console.log("== sequentialWait starts ==");

  // 1. Start two timers without waiting for each other
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  // 2. Wait for the slow timer to complete, and then log the result
  console.log(await slow);
  // 3. Wait for the fast timer to complete, and then log the result
  console.log(await fast);

  console.log("== sequentialWait done ==");
}

async function concurrent1() {
  console.log("== concurrent1 starts ==");

  // 1. Start two timers concurrently and wait for both to complete
  const results = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second(),
  ]);
  // 2. Log the results together
  console.log(results[0]);
  console.log(results[1]);

  console.log("== concurrent1 done ==");
}

async function concurrent2() {
  console.log("== concurrent2 starts ==");

  // 1. Start two timers concurrently, log immediately after each one is done
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
  console.log("== concurrent2 done ==");
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrent1, 7000); // same as sequentialWait

// wait again
setTimeout(concurrent2, 10000); // after 1 second, logs "fast", then after 1 more second, "slow"

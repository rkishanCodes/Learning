// console.log("start");

// async function makeAsyncRequest() {
//   // const url = "https://hub.dummyapis.com/delay?seconds=1";
//   const url = "https://dummyjson.com/products";
//   const response = await fetch(url)

//   // console.log(response);
//   const data=await response.json();
//   console.log(data);
//   // const data = await response.json()
//   // return data

//   console.log("in function");
// }

// // makeAsyncRequest().then((data) => {
// //     console.log(data);
// // })

// console.log(makeAsyncRequest());

// console.log("end");

// console.log("start");
// async function ch() {
//   console.log("in function 2");
//   return 1;
// }

// async function ch1() {
//   console.log("in function 1");

//   const chValue = await ch();
//   console.log(chValue);
//   return 2;
// }

// console.log(ch1());

// console.log("end");

// console.log("start");
// fetch("https://hub.dummyapis.com/delay?seconds=2").then((res) =>
//   console.log(res)
// );
// // .then(console.log);

// fetch("https://hub.dummyapis.com/delay?seconds=1").then((res) =>
//   console.log(res)
// );
// // .then(console.log);
// console.log("end");

// async function fooa() {
//   return 1;
// }

// console.log(fooa());
// //bith are asimilar but not same dont have same reference
// function foo() {
//   return Promise.resolve(1);
// }

// console.log(foo()===fooa());

// debugger;
// console.log("start");

// const p = new Promise((resolve, reject) => {
//   console.log("in prmise");
//   resolve(1);
//   console.log("afte promise");
// });

// p.then((data) => console.log(data));

// // p.then(() => console.log("done"));

// console.log("end");

// debugger;
console.log("start");

const p = new Promise((resolve, reject) => {
  console.log("in prmise");
  resolve(1);
  console.log("afte promise");
});

// p.then((data) => console.log(data));

async function test() {
  console.log("inisde asynch");

  const data = await p;
  console.log(data);
}

test();

// p.then(() => console.log("done"));

console.log("done end");

console.log("end");

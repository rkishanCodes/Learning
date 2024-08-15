console.log("start");

async function makeAsyncRequest() {
  // const url = "https://hub.dummyapis.com/delay?seconds=1";
  const url = "https://dummyjson.com/products";
  const response = await fetch(url)

  console.log(response);
  const data=await response.json();
  console.log(data);
  // const data = await response.json()
  // return data

  console.log("in function");
}

// makeAsyncRequest().then((data) => {
//     console.log(data);
// })

console.log(makeAsyncRequest());

console.log("end");

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

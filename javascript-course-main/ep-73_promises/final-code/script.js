// const resolveBtn = document.querySelector("#resolve-btn");
// const rejectBtn = document.querySelector("#reject-btn");

// setTimeout(() => {
//   console.log("timeut");
// });

const p = new Promise((resolve, reject) => {

  console.log("first promise started");
  // resolveBtn.addEventListener('click', () => {
  //   resolve('Promise Resolveddd')
  // })
  // rejectBtn.addEventListener('click', () => {
  //   reject('Promise Rejected')
  // })
  // setTimeout(() => {
  //   resolve("res");
  // });
  resolve("res1");

    console.log("first promise ended");

});
const p2 = new Promise((resolve, reject) => {
      console.log("second promise staretd");

  // resolveBtn.addEventListener('click', () => {
  //   resolve('Promise Resolveddd')
  // })
  // rejectBtn.addEventListener('click', () => {
  //   reject('Promise Rejected')
  // })
  // setTimeout(() => {
  //   resolve("res");
  // });
  resolve("res2");

        console.log("second promise ended");

});

// p.then((data) => {
//   console.log(data);
//   return 155
// }).then((data) => {
//   console.log(data);
//   return 'Anurag'
// }).then((data) => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })

const result =p.then((data) => {
  console.log(data);
  return "return of then"
});

console.log("result of p then", result);
console.log("p", p);
p2.then((data) => {
  console.log(data);
});

// console.log(1);

// console.log(2);

// setTimeout(() => {
//   console.log("settimeout");
//   for (let i = 0; i < 2; i++) {
//     console.log("first",i);
//   }
// },2000);

// console.log(3);
// setTimeout(() => {
//   console.log("settimeout");
//   for (let i = 0; i < 2; i++) {
//     console.log("second", i);
//   }
// },1000);
// console.log(4);


console.log("end");
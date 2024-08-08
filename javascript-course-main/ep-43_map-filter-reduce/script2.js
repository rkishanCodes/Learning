const nums = [1, 2, 3, 4, 5];

// const sum = nums.reduce((accumulator, current, i) => {
//   // console.log(i, current);
//   // console.log(accumulator);
//   return accumulator * current;
// }, 0);

const sum = nums.reduce((accumulator, current) => {
  console.log(current);
//   console.log(accumulator);
  return accumulator + current;
},0);


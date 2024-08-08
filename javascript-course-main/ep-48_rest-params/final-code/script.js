const nums1 = [1, 2, 3, 4];

function add(...nums) {
  // console.log(a, b, c);
  console.log("nums:", nums[0]);
  let sum = 0;
  for (let i = 0; i < nums[0].length; i++) {
    console.log(nums[0][i]);
    sum = sum + nums[0][i];
  }
  console.log("sum",sum);
  return sum;
}

console.log(add(nums1));
// function add() {
//   return [...arguments].reduce((acc, curr) => acc + curr)
// }

// function add() {
//   return Array.from(arguments).reduce((acc, curr) => acc + curr)
// }

// function add(...nums) {
//   return nums.reduce((acc, curr) => acc + curr)
// }

// const result = add(...nums1)

const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function(element) {
//   return element*2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers); 
//{explicit return 1+1} ()implict return 1+1    

//creates deep copy

const doubledNumbers = numbers.map(function(element) {
  return 1;
});
console.log(doubledNumbers);
//so in map(), what ever we give in return it just stacks up as array


// ().() is called as chaining

// const newNumbers=numbers.map((element)=>{return element*2}).map((element)=>{return element*2})
// const newNumbers=numbers.map((element)=>{return element*2}).filter((element)=>{return element*2})// this filter will only return true so element is stacked
// const newNumbers=numbers.map((element)=>{return element*3}).filter((element)=>{return element%2==0})
const newNumbers=numbers.filter((element)=>{return element%2==0}).map((element)=>{return element*2})
//In JavaScript, when multiple array methods are chained together, they are executed in the order they appear from left to right.
console.log(newNumbers);




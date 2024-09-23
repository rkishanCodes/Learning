const arr=["javascript","css","html"]

const printElement = element => {
  console.log(element);
};

printElement("1")//1
printElement() // undefined

arr.forEach(element => {
  console.log(element)
});

// arr.forEach(function(element,index,arr){
//   console.log(element,index,arr)
// })


arr.forEach(forEachFunction)

function forEachFunction(ele){
console.log(ele)
console.log(ele.name)
}

//When forEach iterates over the elements of the array arr, it calls the function provided to it for each element,
//passing that element as an argument to the function.

// so basically foreach takes element from array and pass argument to specified function reference?
// Exactly! That's precisely how the forEach() method works in JavaScript.

// The forEach() method iterates over each element of the array.
// For each element, it calls the provided callback function (specified function reference), passing the current element as an argument to that function.
// The callback function receives the current element as its parameter and performs whatever operation is specified inside its body.


// const names={
//   "indiaa":91,
//   "japanese":90
// }


// names.forEach(forEachFunction) //TypeError: names.forEach is not a function

const objInArr=[
  {name: "Android",age:21},
  {name: "iOS",age:22}
]


objInArr.forEach(forEachFunction)
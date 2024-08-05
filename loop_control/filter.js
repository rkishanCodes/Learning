// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(function(element) {
//   return true;
// });

// console.log(evenNumbers); // Output: [2, 4]
const numbers = [1, 2, 3, 4, 5];


const evenNumbers = numbers.filter(function(element) {
  return element%2==0;
});

console.log(evenNumbers); 

console.log(numbers); 

//therefore filter method creates shallow copies see at last


// The filter() method is an array method in JavaScript used to create a new array with all elements that pass a certain condition provided by a callback function. 
// It's commonly used when you need to extract elements from an array based on specific criteria.

//so filter function interacted the array and passes each element as argument to reference function, 
//then it stacks all else which passed the criteria in function which is in array

// Iteration over Array:
// The filter() method iterates over each element of the array.

// Callback Function Execution:
// For each element in the array, the provided callback function is executed.
// The current element is passed as an argument to the callback function.

// Condition Check:
// Inside the callback function, you define a condition that the current element must satisfy to be included in the resulting array.
// If the condition evaluates to true, the element is included in the new array.
// If the condition evaluates to false, the element is excluded from the new array.

// Creating New Array:
// The filter() method creates a new array and stores the elements that passed the condition (i.e., the ones for which the callback function returned true).
// This new array contains only the elements that satisfied the criteria specified in the callback function.

// const evenNumbers = numbers.filter(function(element) {
// });


// console.log(evenNumbers); 

// the callback function does not have an explicit return statement. As a result, it implicitly returns undefined for each element of the numbers array. 
// Since undefined is falsy, none of the elements pass the filtering condition, and the resulting filteredNumbers array is empty.

// const books = [
//   { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 1 },
//   { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 2 },
//   { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 3 },
//   { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 4 },
//   { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 5 },
//   { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 6 },
//   { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 7 },
//   { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 8 }
// ];

// console.log(books);


// filteredBooks=books.filter((book) => { return book.edition>5});

// console.log(filteredBooks);
// console.log(books.length);

const books = [
  { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 1 },
  { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 2 },
  { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 3 },
  { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 4 },
  { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 5 },
  { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 6 },
  { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 7 },
  { title: "The Great Gatsby", genre: "Fiction", publishYear: 1925, edition: 8 }
];

// console.log(books);

filteredBooks = books.filter((book) => { return book.edition > 5 });

// console.log(filteredBooks);
// console.log(books.length);//8

books[7].genre='nothing';


console.log(filteredBooks[filteredBooks.length-1]);
console.log(books[books.length-1]);

//therefore filter method creates shallow copies

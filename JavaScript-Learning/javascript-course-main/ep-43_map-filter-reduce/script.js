const months = ["January", "February", "March", "April", "May", "December"];

// const capitalMonths = months.forEach((month, index) => {
//     console.log(index + 1, month)
//     return month.toUpperCase()
//   })

// const capitalMonths = months.map((month, index, array) => {
//     // console.log(index + 1, month)
//     // console.log(array);
//     return month.toUpperCase()
//   })

const filteredMonths = months.filter((month, index, array) => {
//   console.log(month.toLocaleLowerCase().includes("m"));
  // console.log(array);
  return month.toLocaleLowerCase().includes("m");
});

// console.log(filteredMonths);

// const filteredMonths = months.filter((month, index, array) => {
//     // console.log(month.toLocaleLowerCase().includes('m'))
//     // console.log(array);
//     return false
//   })

const students = [
  {
    name: "Akash",
    age: 21,
  },
  {
    name: "Adarsh",
    age: 17,
  },
  {
    name: "Amir",
    age: 18,
  },
  {
    name: "Raman",
    age: 23,
  },
  {
    name: "Nidhi",
    age: 16,
  },
];

const adultStudents = students
  .filter((student) => {
    return student.age >= 18;
  })
  .map((student) => {
    return student.name;
  })
  .filter((student) => {
    return student.includes("A");
  });

// const books = [
//   {
//     title: "The Great Gatsby",
//     genre: "Fiction",
//     publishYear: 1925,
//     edition: 1,
//   },
//   {
//     title: "The Great Gatsby",
//     genre: "Fiction",
//     publishYear: 1925,
//     edition: 2,
//   },
//   {
//     title: "The Great Gatsby",
//     genre: "Fiction",
//     publishYear: 1925,
//     edition: 3,
//   },
//   {
//     title: "The Great Gatsby",
//     genre: "Fiction",
//     publishYear: 1925,
//     edition: 4,
//   },
//   {
//     title: "The Great Gatsby",
//     genre: "Fiction",
//     publishYear: 1925,
//     edition: 5,
//   },
//   {
//     title: "The Great Gatsby",
//     genre: "Fiction",
//     publishYear: 1925,
//     edition: 6,
//   },
//   {
//     title: "The Great Gatsby",
//     genre: "Fiction",
//     publishYear: 1925,
//     edition: 7,
//   },
//   {
//     title: "The Great Gatsby",
//     genre: "Fiction",
//     publishYear: 1925,
//     edition: 8,
//   },
// ];

// // console.log(books);

// filteredBooks = books.filter((book) => {
//   return book.edition > 5;
// });

// // console.log(filteredBooks);
// // console.log(books.length);//8

// books[7].genre = "nothing";

// console.log(filteredBooks);
// console.log(books);

// //therefore filter method creates shallow copies

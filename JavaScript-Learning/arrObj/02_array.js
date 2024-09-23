const arr1=["A","B","C"]
const arr2 = ["D", "E", "F", ["g", ["h", "i", ["j", "k"]]]];

// arr1.push(arr2)
//  console.log(arr1)
//  console.log(arr1[3][2])


console.log(arr1.concat(arr2))// concat retuns so need to new arr

const arrconcat=arr1.concat(arr2)
console.log(arrconcat)


console.log( [...arr1,...arr2.flat(Infinity)])// by using spread operator retun specified data type arr or objects
// flat is used to the  flatten the nested array
console.log(...arr1,"spread")


 function add(x,y,z){
  console.log("add function",x,y,z)
 }

 const numbers=[1,2,3]

 add(...numbers)

 console.log(Array.isArray(arr1))
 console.log(Array.from(arr1))
 console.log(Array.from("kishan"))
 console.log( typeof Array.from("kishan")) //return array


 let a=100
 let b=2
 let c=90
 let d=new Array(a,b,c)
 console.log(Array.of(a,b,c))
// diifrence
//console.log(Array.of(3));    // Output: [3]
// console.log(new Array(3));   // Output: [ , , ]



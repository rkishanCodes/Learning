const arr=[true,false, 1,2,3,4,5,"ksiahn"]


newArr=Array.from(arr);

console.log(arr)
console.log(newArr)

console.log(newArr.pop())
newArr.push("hello")


console.log(arr)
console.log(newArr)

//copying array results in showllow copies but modification like push or pop wont change
// but arr with non primivtive datatype like obj in org arr, newArr copyfrom that then ang changes in object will result in both the array

arr.push({name:"kishan"})

console.log(arr)
newArr=Array.from(arr);
console.log(newArr[8].name);
newArr[8].name="change kishan"
newArr=Array.from(arr);
console.log(newArr);
// by doing like this too it wont change as still it apllied to specific arr element, obj should be creetd outside, then 
//add to arr, then make a copy of that to get reulst of shallow copies

// const obj1 = { key: 'value' };
// const arr1 = [true, false, obj1];

// // Shallow copy of the array
// const newArr1 = Array.from(arr1);

// // Modifying the inner object in the original array
// obj1.key = 'new value';

// console.log(arr1);      // [true, false, { key: 'new value' }]
// console.log(newArr1);   // [true, false, { key: 'new value' }]


const s={
  name:"ksiahn",
  age:21
}

// const newArr2=Array.from(s) it wont work it will retun emoty arr
// console.log(newArr2);

console.log(  Object.values(s))// return array which is object
console.log( typeof []);


const myarr=new Array(1,2,3)

// console.log(myarr.values())// returns Object [Array Iterator] {} it should be sind in for loop

// const arrayValues = myarr.keys();

// for (const value of arrayValues) {
//   console.log(value);
// }


//  array methods

// myarr.push(4) add ele at end
// myarr.pop() del ele at end

// myarr.unshift(0) //add  ele at starting
// myarr.shift()//del ele at end

// console.log(myarr.includes(1))
// console.log(myarr.indexOf(1))
// console.log(myarr.indexOf(90))

// const strArr=myarr.join("*")//return srting 

// console.log(typeof strArr,strArr)
// console.log(myarr)

//splice slice

console.log("A",myarr)

const myarr1=myarr.slice(1,2)//n-1

console.log("B",myarr1,"slice")
console.log("A",myarr)

const myarr2=myarr.splice(1,2)//n
console.log("C",myarr2,"splice")// removes the org arr ele too

console.log("A",myarr)








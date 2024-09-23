//The reduce() method in JavaScript is a powerful array method used to reduce an array into a single value.
// It iterates over each element of the array and applies a callback function to accumulate a single result.
// The result can be of any data type, not just an array.

// reduce(callbackFn)
// reduce(callbackFn, initialValue)


const array=[2,10,3,4,5,6,7,8,9,10]

// const newArray=array.reduce((accumulator, currentValue) => accumulator + currentValue)
const newArray=array.reduce(
  (accumalator,currentValue)=>{
    console.log(`accumalator ${accumalator} and currentValue ${currentValue}`);
    return accumalator+currentValue 
    // console.log(`accumalator ${accumalator} and currentValue ${currentValue}`); //wont exceute after return function

  }
  //initialValue is optional
  // The first time that the callback is run there is no "return value of the previous calculation". 
  // If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as
  //  the initial value and iteration starts from the next element (index 1 instead of index 0).
  // if initialValue given then accumalator will start intiail value and currentVALUE will start from 0 index
  // if else then accumalator will be use index value 0(first) and currentVALUE will start from 1 index(second)
)

console.log(newArray);
console.log(typeof newArray)


const string=array.map(String)// this is nice
console.log(string, typeof string );

string[0]=200
string[1]=200
console.log(array );

const newArrayString=string.reduce(
  (accumalator,currentValue)=>{
    console.log(`accumalator ${accumalator} and currentValue ${currentValue}`);
    return accumalator+currentValue 
    // console.log(`accumalator ${accumalator} and currentValue ${currentValue}`); //wont exceute after return function

  }
)

console.log(newArrayString );



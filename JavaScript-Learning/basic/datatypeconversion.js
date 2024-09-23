let a =undefined
console.log(typeof a)
a=Number(a)//to number
console.log(typeof a)
console.log(a)

//33=>33
//33A=>NaN
//false=>0,true=>1
//null=>0
//undefined=>Nan

let bool=1
console.log(Boolean(bool));

let bool1=""
console.log(Boolean(bool1));

let bool2="kisna"
console.log(Boolean(bool2));

let bool3=0
console.log(Boolean(bool3));

//false=>0,"";true=>1,"char/str",any num


let b=33
 console.log(typeof b,typeof String(b),typeof b)// just retruning string
b=b+2//concat if in other language,we would have got error

String(b)//still number
b=String(b)// it can be concluded that value has to be stored 
           // the existing value type cannot be changed we will 
           // be changing the type by returning wiht value
console.log(b)
console.log(typeof b)

b=Boolean(b)
console.log(b)
console.log(typeof b)

b=BigInt(b)
console.log(b)//n suufix for BigInt literal
console.log(typeof b)

b=Object(b)
console.log(b)
console.log(typeof b)

b=JSON.stringify(123)
console.log(b)
console.log(typeof b)//string

// Convert back from JSON (Parse)
console.log("Convert back from JSON (Parse)"); 
b = JSON.parse(b);
console.log(b)
console.log(typeof b); // "object"

b=Array.from(123)
console.log(b)
console.log(typeof b)// returns object because its not iterable











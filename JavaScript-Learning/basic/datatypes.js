'use strict';//treat js has new version

// global.alert(1 + 1); this is not browser

let a=0
let b="jkbfj"
let c=false

console.log(a,b,c);

//number
//BigInt
//boolean
//string
//null
//undefined
//symbol=>unique   create a symbol using the Symbol constructor.

const symbol1 = Symbol('mySymbol');
const symbol2 = Symbol('mySymbol');
console.log(symbol1) // false


console.log(symbol1 === symbol2); // false

console.log(typeof 1)
console.log(typeof "abc")

console.log(typeof false)
console.log(typeof Symbol())
console.log(typeof null)//object
console.log(typeof undefined)

console.log(typeof BigInt("123"))





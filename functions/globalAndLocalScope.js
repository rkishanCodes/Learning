
var c=22 // global scope

let b=100//global scope there will be no changes if the same variable used in block-scoped
const a=10

if(true){
const a=9//block-scoped
let b=10//block-scoped
var c=11 //global scope but is not block-scoped
console.log(a)

}

console.log(a);
// console.log(b);
// console.log(c);


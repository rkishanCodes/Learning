//types of memory=> stack and heap

//primitive=> stack, non-primitve/refrence=>heap


// stack
const name="kishan"
copyName=name
console.log(copyName);// copy of variable is passed
copyName="R kishan"
console.log(copyName);


const s1={
  name:"kisham",
  age:21
}
console.log(s1.name);

// heap
const s2=s1//refrence => orginal is passed

s2.name="ABC"

console.log(s2.name);
console.log(s1.name);




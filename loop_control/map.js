//The Map object holds key-value pairs and remembers the original insertion order of the keys. 

//Value equality is based on the SameValueZero algorithm.

const country=new Map();
const country1=new Map();
country.set(1,2)
// country.set(1,4) //wont be stacked becuase of key is not unique
console.log(country);
//Map(1) { 1 => 2 } (n) represnet number of objects
console.log(country[1]);// reutns undefined
//. Unlike arrays or objects, Map objects do not support direct access using index notation like country[1].


console.log(country1);

const countries=new Map([["indiaa",91],["japanese",90]])
//initializing one key-value pair, but it still needs to be wrapped in an array because the Map constructor expects an iterable. Therefore, it looks like it's wrapped twice.


console.log(countries);

console.log(countries.get("indiaa"));
console.log(countries.get("japanese"));
countries.set("japanese",900)
console.log(countries.get("japanese"));

// countries.delete("indiaa")
console.log(countries)

for(let country of countries){
  console.log(country)
  console.log(typeof country)// cause array is object

}

// for(let [country,no] of countries){ // destructureing
//   console.log(country,no)

// }


// const countriesobj={
//   "indiaa":91,
//   "japanese":90
// }


// for(let [country,no] of countriesobj){ // destructureing
//   console.log(country,no)

// }

// console.log(Object.entries(countriesobj))



// for(let [country,no] of Object.entries(countriesobj)){ // destructureing
//   console.log(country,no)

// }

// for(let {country,no} of Object.entries(countriesobj)){ // destructureing
//   console.log(country,no)

// }

// const {name}={"name":"John"}// for destruxting have use same property name
// const {name:a}={"name":"John"}// by : we can give custom value

// console.log(name)
// console.log(a)
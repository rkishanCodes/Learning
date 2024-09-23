//for in

// const arr=[1,2,3,4  ]

// for(let i in arr){ // i contains key
//   console.log(i,arr[i])
// }

// const str="hello"

// for(let i in str){
//   console.log(i,str[i])
// }

// const obj={
//   name:"kishan",
//   age:20,
//   city:"delhi"
// }

// for(let i in obj){
//   console.log(i,obj[i])
//   console.log(typeof i)
// }


const countries=new Map([["indiaa",91],["japanese",90]])
// for(let country of countries){
//   console.log(country)
//   console.log(typeof country)// cause array is object
// }

for(let country in countries){
  console.log(country)
}

// wont execute cause map is not iterable


const names={
  "indiaa":91,
  "japanese":90
}

// for(let name in names){
//   console.log(name)
// }



// singleton using constructor

//object literals
//keys and values

//in array we cant assign value for key

const user={
  name:"kishan",
  age:21
}

const mySym=Symbol("keys1")
const ch={
  1:2,
  "name":"ch2",
  1:4,// dupliates is there but gives the bottom high precedence value
  [mySym]:"value2",
  name:"ch3" // for using symbol as key use [symbol variable], if [] not used the it will considered as string
}

console.log(user.name)

console.log(ch[2-1])//since key is number // by using sqaure brackets we use expression as well
console.log(ch["name"],"name")
console.log(ch[mySym])

ch[1]=8
console.log(ch[2-1])

// Object.freeze(ch)
ch[1]=9// value  wont be changed

ch.email="121@gmail.com"
ch.z="121"
console.log(ch["nafds"]);//if keys is not correct retrun undefined

ch.welcome=function hello(){// function(){} or ()=>{statements}
  console.log("hello",ch.name,this.name)
  return 1
}

console.log(ch)

console.log(ch.welcome())

// So, the return value (1) is not stored within the ch object.
// If you want to store the return value in the object
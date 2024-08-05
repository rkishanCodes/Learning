// function calculatePrice(){
// }

// console.log(calculatePrice())// gives undefined as its not returning

// result=calculatePrice()

// console.log(result)

//function always retuns in JS


// function calculatePrice(value){
//   return value
// }

// console.log(calculatePrice(200,400))
// In JavaScript, a function will accept any number of arguments, regardless of the number of parameters it's defined with.
//However, only the first parameter will be assigned a value if there are more arguments than parameters.


// function calculatePrice(...value){//spread operator
//   return value
// }

// console.log(calculatePrice(200,400))

// function calculatePrice(val1,val2,...num){
//   return num
// }

// console.log(calculatePrice(200,400,300,5000))



const user={
  userName:"kishan",
  // loggedIn:true
}

function userDetails(user){
console.log(`hello user ${user.userName}`)//here obj is global
console.log(`you have loggedin ${user.loggedIns} `);// undefined

// console.log(`hello user ${userName}`)

}

// userDetails()

userDetails({
  userName:"Bharath"
})



function returnArray(arr){
  return arr
}

console.log(returnArray([1,2]))



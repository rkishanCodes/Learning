// function helloWorld(){
//   console.log("hello world")
// }
// console.log(helloWorld)// this is reference
// helloWorld()// with paramthesis used for execution

// function useLoggedIn(){
//   return `${1}`
// }
// // console.log(typeof useLoggedIn());// returns string

function userData({name}){
  console.log(name)
}
// userData()// gives erroer : TypeError: Cannot destructure property 'name' of 'undefined' as it is undefined.
// userData({name:"kishan"})

function userDataWithoutDestructing(name){ // no decalration in function defintion, this is parameter
  console.log(name)
}

// userDataWithoutDestructing()// gives undefined

// userDataWithoutDestructing("kishan")//arguments

function nullImplicit(a,b){
  console.log(typeof b)// null is object
  console.log(b+b)//0+0
  console.log(typeof ++b,--b,--b)// we can do increment operator
  console.log(a+b) //  it implicitly converts null to the number 0 before performing the addition.
}

function addTwoNumbers(a,b){
  return a+b
  console.log(a+b);
}
// addTwoNumbers(3,"4")
// const addTwoNumbers= addTwoNumbers(3,null)// SyntaxError: Identifier 'addTwoNumbers' has already been declared

// const result=addTwoNumbers(3,4)
// console.log( typeof result,result)// cause nothing returning

function userLoggedInMessade(user){
  if(user){
    console.log(`welcome ${user}`)//wont execute
  }
  else{
    console.log(`Please enter valid name`)
  }
}

// userLoggedInMessade("kishan")
userLoggedInMessade('')
userLoggedInMessade(false)
userLoggedInMessade()
userLoggedInMessade(undefined)
userLoggedInMessade(0)
userLoggedInMessade(null)
userLoggedInMessade(" ")


function varaibleDeclaratioInFunctionDEfintion(name="kishan"){
console.log(name)
}

varaibleDeclaratioInFunctionDEfintion()

















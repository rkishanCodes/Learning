

//false
// false,0,-0,0n,"",undefined,null,Nan

// if(false){
//   console.log("exceted");
// }
// else{
//   console.log("not exe");
// }

// if(0){
//   console.log("exceted");
// }
// else{
//   console.log("not exe");
// }

// if(-0){
//   console.log("exceted");
// }
// else{
//   console.log("not exe");
// }

// if(0n){
//   console.log("exceted");
// }
// else{
//   console.log("not exe");
// }

// if(null){
//   console.log("exceted");
// }
// else{
//   console.log("not exe");
// }

// if(undefined){
//   console.log("exceted");
// }
// else{
//   console.log("not exe");
// }

// var a;
// if(a){
//   console.log("exceted");
// }
// else{
//   console.log("not exe");
// }

//true

//"0". 'false',[],{}, function()

// if("0"){
//   console.log("exceted");
// }
// else{
//   console.log("not exe");
// }

// if("false"){
//   console.log("exceted");
// }
// else{
//   console.log("not exe");
// }

// if([]){
//   console.log("exceted");
// }
// else{
//   console.log("not exe");
// }

// if({}){
//   console.log("exceted");
// }
// else{
//   console.log("not exe");
// }


// if (function(){console.log("function is true"); return true; }()) {
//   console.log("executed");
// } else {
//   console.log("not executed");
// }

// if (function(){console.log("function is true"); return false; }()) {
//   console.log("executed");
// } else {
//   console.log("not executed");
// }

// if (function(){console.log("function is true");  }()) {
//   console.log("executed");
// } else {
//   console.log("not executed");
// }

// if(function(){console.log("function is true");}){
//   console.log("exceted");
// }
// else{
//   console.log("not exe");
//   console.log(function(){console.log("function is true");});// returns undefined
// }

// need to have decalaration here

// function(){
//   console.log("hello world");
// }\

//In JavaScript, when you use an anonymous function as a condition in an if statement, 
//the condition checks the truthiness of the function object itself, not whether the function is executed or not. 

// if (function() {
//   console.log("function is true");
// }()) {                        //() function is invoked and return undefined
//   console.log("if block executed");
// }

// if (function() {
//   console.log("function is true");
// }) {                        //function is executed but functions are truthy 
//   console.log("if block executed");
// }


// const userEmail=[]

const userEmail={}

if(Object.keys(userEmail).length==0){
  console.log("array is empty");
}








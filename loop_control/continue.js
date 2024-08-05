//continue
//continue statement is used to skip the current iteration of a loop and continue with the next iteration.

// for(let i=0;i<5;i++){
//   if(i%2!=0) continue;
//   console.log(i)
// }

// for(let i=0;i<5;i++){
//   if(i%2==0) {break};
//   console.log(i)
// }

// for(let i=0;i<5;i++){
//   if(i==2) {continue};
//   console.log(i)
// }


//works in loop



// for(let i=0;i<5;i++){
//   if(i%2!=0) {
// const odd="odd"  }
//   console.log(odd)// not defined
// }

// for(let i=0;i<5;i++){
//   if(i%2!=0)  odd="odd"  
//   console.log(odd)// not defined
// }

// label_continue:for(let i=0;i<4;i++){

//   if(i%2==0){
//     continue label_continue;
//   }
//   console.log(i);
// }


(()=>{
  console.log("IIFE");
  // continue //SyntaxError: Illegal continue statement: no surrounding iteration statement
})()




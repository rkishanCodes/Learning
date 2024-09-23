// break and continue are control flow statements used within loops (such as for, while, and do-while)
// to alter the flow of execution.

// break statement:
// The break statement is used to terminate the current loop prematurely.
// When encountered within a loop, break immediately exits the loop, regardless of whether the loop condition is still true or if there are remaining iterations.
// After encountering a break, the program resumes execution from the statement immediately following the loop.
// break is commonly used to exit a loop early when a certain condition is met, avoiding unnecessary iterations

// const n=22;
// for(let i=2;i<=n;i++){
//   let flag=1;
//   if(n%i==0){
//     flag=2
//     console.log(`${i} is the first varaible to divide ${n}`)
//     break
//   }
//   if(flag===2){
//     console.log(`${n} is prime`)
//   }
// }

// prime number by break

const n=23;
for(let i=2;i<=n;i++){


  if(i==n)
{    
  console.log(`${n} is prime`)
}  
if(n%i==0){
  break
}
}
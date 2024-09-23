//break

// break statement is used to exit from a loop prematurely, either a for loop, while loop, or a switch statement.
//It allows you to terminate the loop's execution based on certain conditions.

// for(let i=0;i<5;i++){
//   if(i==4){
//     break;
//   }
  // console.log(i);
// }


// for(let i=1;i<3;i++){
//   console.log(`this is outer loop ${i}`);
//   for(let j=1;j<4;j++){
//     console.log(`this is inner loop ${j}`);
//     // to multiplication table
//     console.log(`${i} * ${j} = ${i*j}`);
//   }
// }
// for(let i=1;i<3;i++){
//   console.log(`this is outer loop ${i}`);
//   for(let j=1;j<4;j++){
//     break;//terminaltes the inner loop
//     console.log(`this is inner loop ${j}`);
//     // to multiplication table
//     console.log(`${i} * ${j} = ${i*j}`);
//   }
// }

label_breaks:
for(let i=1;i<3;i++){
  console.log(`this is outer loop ${i}`);
  for(let j=1;j<4;j++){
    if(i*j==4){
      console.log("terinated beciase of ",i*j);
      console.log(typeof label_breaks)
      break label_breaks
    }//terminaltes the inner loop
    console.log(`this is inner loop ${j}`);
    // to multiplication table
    console.log(`${i} * ${j} = ${i*j}`);
  }
}

//In JavaScript, the colon (:) is used to define labels for loops. Labels are identifiers followed by a colon
// and can be applied to loops (such as for, while, do-while) to provide a target for the break and continue statements.









//loop is nothing but how mnay times i should excetue the statement
// for that i need intailaxe a varaible need contion when to end, then need to know when to end



// for (let index = 0; index < array.length; index++) {
//   const element = array[index]; // ReferenceError: array is not defined
// }


// const array=[];

// console.log(array.length);

// for (let index = 0; index <=array.length; index++) {
//   const element = array[index]; 
//   console.log(typeof element); // undefined
// }

// for(i=0;i<2;i) //  loop is not terminating and variable  is inreemnting or decrementing
//  {
//   console.log(i)
// }


// for (const i = 0; i < 1; ) {
//   console.log(i);
//   break;
// }

// executes till condiotn becomes true

// for(let i=0;true;i++){
// console.log(9)
// }

// for(let i=0;false;i++){
//   console.log(9)
//   } wont exceute


// for loop will execute untill conditon becomes false
// inalaiaztion and inc/dec is used to how the lop varibale to func: what value it should
// so in condtion part it will true or false, if flase the contion will terminalte


// for(let i =0;i<5;i++){
//   const num=i;//not re assginging,  initializing it once in each iteration of the loop.
//   console.log(num)
// }

//post and pre increment give same result

// for(let i=1;i<3;i++){
//   console.log(`this is outer loop ${i}`);
//   for(let j=1;j<4;j++){
//     console.log(`this is inner loop ${j}`);
//     // to multiplication table
//     console.log(`${i} * ${j} = ${i*j}`);
//   }
// }

const array=[1,2];

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element);
  
// }

for (let index = 0; index <= array.length; index++) { // if we access n+1th ele we will get undefined
  const element = array[index];
  if(element===undefined){
    console.log("cant access",index);
  }else{
    console.log(element,index);
  }
}



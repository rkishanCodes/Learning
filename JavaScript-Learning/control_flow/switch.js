// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }


let day=""

switch(day){
  case "tuesday":console.log("monday");
  break;
  case "tuesday":console.log("tuesday");
  default:
    console.log("enter proer day");
}

let number=2
switch(number){
  case Number("2"): { // key has to strictly equal
    console.log(1)
    number+=2
    console.log(number);
  }
}

//when break not given if case is mathced then all the below case will be exceuted expect default
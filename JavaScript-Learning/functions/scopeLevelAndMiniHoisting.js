function one(){
  // two() ReferenceError: Cannot access 'mainUnser' before initialization
  //method can be clled any where but the varaible used in that should be defined 
  const mainUnser="kishanAdmin"
  two()



  function two(){
    const name="kishan"
    console.log(mainUnser);
    //two() ends up in Infinte loop
  }
  two()
  // console.log(name);//RefrenceError name is not defined
}

one()
// two() same Refrence Erroe
// in line by line will be excuted


function add(num){
  return num+1
}
 const result=add(5)

//function expression
 const result1=function (num){ // result1 is varaible of function type
  return num+1
}


console.log(typeof result,typeof result1);
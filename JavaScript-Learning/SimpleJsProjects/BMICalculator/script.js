//insted of button i can use for from too 
//but event type will be submit

// const calculate=document.querySelector("input[type='submit']");

// console.log(calculate)

// calculate.addEventListener('click', ()=>{
//   //     // event.preventDefault(); // Prevent form submission

//   console.log("clickfsfsed");
// })
//issue with my method t might not work as expected if the form is being submitted before the click event is triggered. This behavior can happen if the form submission is not prevented or intercepted.



// document.addEventListener('DOMContentLoaded', () => {
//   const calculate = document.querySelector('input[type="submit"]');
  
//   calculate.addEventListener('click', (event) => {
//     console.log("clicked");
//   });
// });


document.addEventListener('DOMContentLoaded', () => {
  const calculate = document.querySelector('input[type="submit"]');
  
  calculate.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log("clicked",event,event.x,event.y);
    // console.log(event.target);
    // console.log(event.target.id);
    // console.log(event.target.name);
    // console.log(event.target.value);
    // console.log(event.target.checked);
    // console.log(event.target.type);
    // console.log(event.target.parentElement);
    // console.log(event.target.parentElement.id);
    // console.log(event.target.parentElement.name);
    // console.log(event.target.parentElement.value);
    // console.log(event.target.parentElement.checked);
    // console.log(event.target.parentElement.type);
    // console.log(event.target.parentElement.parentElement);
    // console.log(event.target.parentElement.parentElement.id);
    // console.log(event.target.parentElement.parentElement.name);

    const weight=Number(document.querySelector("#weight").value)
    const height=Number(document.querySelector("#height").value)
    const resultid=document.querySelector("#result")

    if(weight==='' || weight<=0 || isNaN(weight)){
      resultid.innerHTML = "Please enter a valid weight "+weight;
    } 
    else if(height==='' || height<=0 || isNaN(height)){
      resultid.innerHTML = "Please enter a valid height "+height;
    }
    // console.log(typeof weight,weight);
    // console.log(typeof height,height);
else{
    const result=weight/(Math.pow(height,2))//there is no sqaure function
    console.log(result);
    resultid.innerHTML = "BMI is "+result;

    if(result<18.5) {
      document.querySelector("li:nth-child(1)").style.backgroundColor="yellow"
    }
    else if(result>=18.5 && result<24.9) {
      document.querySelector("li:nth-child(2)").style.backgroundColor="lightblue"
    }
    else{
      document.querySelector("li:nth-child(3)").style.backgroundColor="red"
    }
}

  });
})


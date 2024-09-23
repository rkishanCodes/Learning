// const change= setTimeout(() =>{
// document.querySelector("h1").innerHTML="ASync"
// },2000)


// document.querySelector("button").addEventListener('click',()=>{
//   console.log("stoped");
//   clearInterval(change)
// })


const hex='0123456789ABCDEF'

  // console.log("hi");


  let intervalId;
  function randomColor(){

    // use setInterval for a loop
      let color='#'
      for(let i=0; i<6;i++){
      color+=hex[Math.floor(Math.random()*hex.length)]
    }
    return color;
    //but we need id to stop and it has to universal 
    


}

function startColor(){
  
 if(!intervalId)//this is to make only one time to occur
 { intervalId=setInterval(function(){
    document.body.style.backgroundColor=randomColor();
  },1000)}
  console.log('click to start',intervalId);
  // intervalId=null;
  // this will add up every time i click the button it will create a new setINeterval
}
function stopColor(){
  console.log(intervalId);
clearInterval(intervalId);// this will stop newest interval id created
intervalId = null;
//so we create a if statement so the interval all exection stops once for all
}

//so i have to use modular programming

document.getElementById("start").addEventListener("click",startColor);
document.getElementById("stop").addEventListener("click",stopColor);

// clearInterval(intervalId)




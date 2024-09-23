const timeDiv=document.querySelector(".time");
// console.log(timeDiv);

// timeDiv.innerHTML = "hello";

// const time = new Date();
// console.log(time.toLocaleTimeString());

// timeDiv.innerHTML = time.toLocaleTimeString();// but for this verytime i should reload 

// if(true){// only one time
//   timeDiv.innerHTML = time.toLocaleTimeString();
// }

// while(true){// this will make document render infinite
//   timeDiv.innerHTML = time.toLocaleTimeString();
// }//This approach creates an infinite loop that continuously updates the content of the HTML element with the current time. It causes the browser to freeze because it keeps updating the DOM in an infinite loop, preventing any further interaction or rendering.



const intervalid=setInterval(() => {
  const time = new Date();
  timeDiv.innerHTML = time.toLocaleTimeString();
}, 1000);

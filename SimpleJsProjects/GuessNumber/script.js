// const randomNumber = Math.floor(Math.random() * 100) + 1;
// const form=document.querySelector('form');
// // console.log(form);
// const guessNumber=document.querySelector("guess")
// // const guessNumber=document.querySelector("guess")
// form.addEventListener('submit',(event)=>{
//   event.preventDefault();
//   // console.log(event.srcElement)//internet explorer
//   // console.log(event.target);// all modern browsers
//   // console.log(event);
// })



document.body.style.background="#E0FFFF"
const randomNumber=Math.floor(Math.random()*100+1);
console.log( randomNumber);

const guessNumber=document.getElementById('guessNumber');// cant use value it will take the value of inptu whihc is not enter when document i sloaded
// console.log(guessNumber);

const button = document.querySelector("#submit");
// console.log(button);
const result=document.querySelector(".result");
// console.log(result);

const previousGuess=document.querySelector("#previousGuess");
// console.log(previousGuess);
// previousGuess.innerHTML="ji"

const Remaining=document.querySelector("#Remaining");
// console.log(Remaining);

const lowOrHigh=document.querySelector("#lowOrHigh");
// console.log(lowOrHigh);

const endGameMessage= document.getElementById("endGameMessage");

const newGameButton = document.getElementById("newGameButton");
newGameButton.addEventListener('click',newGame);



let prevGuess=[]
let remainGuess=10

let playGame=true

if(playGame) { 
  button.addEventListener('click',(e)=>{
  e.preventDefault();
  const guess=Number(guessNumber.value);
  // console.log(typeof guess);
  if(guess===randomNumber){
    gameWon();
  }
  else {
    validate(guess)
  }
                                        }                      
                          );
}

function validate(guess){
  const invalidGuess=document.getElementById("invalidGuess");
  if(guess<0 || isNaN(guess) || guess>100 || guess==""){
  invalidGuess.style.display="inline";
  invalidGuess.style.position="absolute";
  invalidGuess.style.top="154px";
  invalidGuess.style.left="280px";
  invalidGuess.style.color="red";
  invalidGuess.style.fontSize="18px";
  invalidGuess.innerText = `Please enter a valid guess ${guess}`;
}
else{
  invalidGuess.style.display="none";
  checkGuess(guess);
  displayGuess(guess);
}
}

function checkGuess(guess){
if(guess<randomNumber){
lowOrHigh.innerHTML = "Too Low"
}
else if(guess>randomNumber){
  lowOrHigh.innerHTML = "Too High"
}
}

function displayGuess(guess){
  prevGuess.push(guess);
  previousGuess.innerHTML=prevGuess.join(" * ");

  remainGuess-=1;
  if(remainGuess>=0){
    Remaining.innerHTML=remainGuess;
  }
  else{
    endGame();
  }
}



function gameWon(){
  document.body.style.background="#7CFC00"
  button.setAttribute('disabled', '');
  guessNumber.setAttribute('disabled', '');
  playGame=false;
  newGameButton.style.display="inline-block";
}
function endGame(){
  button.setAttribute('disabled', '');
  guessNumber.setAttribute('disabled', '');
  document.body.style.background="#ED2939"
  endGameMessage.innerHTML=`Oops! Game Over. Random number: ${randomNumber}`
  playGame=false;
  endGameMessage.style.display="block";
  newGameButton.style.display="inline-block";
}

function newGame(){

  document.body.style.background="#E0FFFF"
  playGame=true
  prevGuess=[]
  remainGuess=10
  endGameMessage.style.display="none";
  newGameButton.style.display="none";
  button.removeAttribute('disabled');
  guessNumber.removeAttribute('disabled');

  previousGuess.innerHTML=prevGuess.join(" * ");
  Remaining.innerHTML=remainGuess;
  lowOrHigh.innerHTML = ""


}








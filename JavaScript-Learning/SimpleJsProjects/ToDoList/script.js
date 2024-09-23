let raiseBarValue=0;
// let 

// const input=document.getElementById("input")

// console.log(input)

// console.log(input.value)

// input.addEventListener("input",()=>{
//   console.log(input.value)
//   console.log(typeof input.value,input.value==="")

// })


// const checkbox1=document.getElementById("checkbox1")

// console.log(checkbox1)

// console.log(checkbox1.checked)

// checkbox1.addEventListener("click",()=>{
//   console.log(checkbox1.checked)
// })


// for(let i=0;i<=3;i++){

//   const chechbox=document.getElementById(`chechbox${i}`)
//   console.log(chechbox)
//   // chechbox.addEventListener("click",()=>{
//   //   console.log(checkbox1.checked)
//   // })

// }




for (let i = 1; i < 4; i++) {
  let checkbox=document.getElementById(`checkbox${i}`)
  checkbox.addEventListener("click",checkboxClick)
  // const input=document.getElementById(`text${this.id.match(/\d/g).join()}`)

// console.log(checkbox.id.match(/\d/g).join())
let text=document.getElementById(`text${checkbox.id.match(/\d/g).join()}`)
console.log(text)
text.addEventListener("input",alertInput)
}


function checkboxClick(e){
  // console.log(e)
  // console.log(this.checked,this.id)
  const input=document.getElementById(`text${this.id.match(/\d/g).join()}`)
  // console.log(input)
  // console.log(input.value=="")
  if(input.value){
    // console.log(input.value)
    raiseBar(this,input)

  }
  else{
    e.preventDefault()
    console.log("please enter value")
    document.querySelector(".alert").style.display="block"
  }

 
}

function raiseBar(checkBox,input){

  const checkedValue=checkBox.checked;
  console.log("raise bar ",checkedValue)
  let raiseBar=document.getElementById("raisebar").style
  // console.log(raiseBar)

// console.log(typeof parseInt(raiseBar.width),parseInt(raiseBar.width))

// console.log("chcek ",parseInt(raiseBar.width)<420)

  if(parseInt(raiseBar.width)<=300 || parseInt(raiseBar.width)>=0){

    if(checkedValue){

      // console.log(checkBox)
      checkBox.style.opacity=100
      checkBox.style.accentColor="#48a301"

      console.log(checkBox.parentElement)
      checkBox.parentElement.style.backgroundColor="#48a301"
      checkBox.parentElement.style.border="#48a301"


      raiseBarValue+=100
      raiseBar.width=`${raiseBarValue}px`
      input.style.textDecoration="line-through"
      console.log(this.autofocus)
      // raiseBar.width=`140px`

    }
    else{
      checkBox.parentElement.style.backgroundColor="white"
      checkBox.style.opacity=0

      raiseBarValue-=100;
      raiseBar.width=`${raiseBarValue}px`
      input.style.textDecoration="none"

      checkBox.parentElement.style.border="0.080rem solid #A9A9A9"

    }

    if(raiseBarValue==300){
      document.querySelector('.congrats').style.display="inline-block"
    }
    else{
      document.querySelector('.congrats').style.display="none"
    }
  }





}


// let raiseBar1=document.getElementById("raisebar").style
// console.log(raiseBar1)


// raiseBar1.width="20px"


function alertInput(){
  document.querySelector(".alert").style.display="none"
}





const container=document.querySelector('.container');
// console.log(container);
// console.log(container.children);

const colorContainer=container.children;
// console.log(colorContainer);


for(const child of colorContainer){
  child.style.backgroundColor=child.id
  child.addEventListener('click',()=>{
  console.log('clicked');

  // document.body.style.backgroundColor=child.style.backgroundColor;
  
  // const computedStyle = window.getComputedStyle(child);
  // console.log(computedStyle);
  // const backgroundColor = computedStyle.backgroundColor;
  // console.log(backgroundColor);
  // document.body.style.backgroundColor = backgroundColor;

  document.body.style.backgroundColor =  window.getComputedStyle(child).backgroundColor;
  //this does not rewuire id
  // i have studied this in window methods


})
}



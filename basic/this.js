const video={
  title:"a",
play:()=>{
console.log("playing")
}
}


video.stop=()=>{
  console.log("stoping")
}

video.year=2002

console.log(video.year)
video.stop()


// function exampleFunction() {
//   console.log(this);
// }

// const obj = {
//   method: exampleFunction
// };

// exampleFunction(); // In a browser, this might refer to the window object
// obj.method(); // In this case, this refers to obj



function Video(title){
  this.title=title
  console.log(this);//returns object
}

const v = new Video("c")


console.log(v)
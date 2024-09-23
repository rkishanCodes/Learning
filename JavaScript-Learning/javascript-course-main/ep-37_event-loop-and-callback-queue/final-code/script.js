console.log("Hi-1");

function hello() {
  console.log("Hello World!");
}

for (let i = 1; i <= 0; i++) {
  console.log(i);
}

hello();

setTimeout(hello, 1000);
setTimeout(function(){
  console.log("o sec hello");
}, 0);

console.log("Hi-2");

for (let i = 1; i <= 0; i++) {
  console.log(i);
}

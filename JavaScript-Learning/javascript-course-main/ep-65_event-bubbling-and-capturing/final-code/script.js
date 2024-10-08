const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");
const h1 = document.querySelector("h1");

window.addEventListener(
  "click",
  (e) => {
    console.log("6. Window Event Listener");
  },
  { capture: true }
);

document.addEventListener(
  "click",
  (e) => {
    console.log("5. Document Event Listener");
  },
  { capture: true }
);

document.body.addEventListener(
  "click",
  (e) => {
    console.log("4. Body Event Listener");
  },
  { capture: false }
);

green.addEventListener(
  "click",
  (e) => {
    console.log("3. Green Event Listener");
  },
  { capture: true }
);

pink.addEventListener(
  "click",
  (e) => {
    console.log("2. Pink Event Listener");
  },
  { capture: true }
);

blue.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation()
    console.log("1. Blue Event Listener");
  },
  { capture: false,once:true }
);
h1.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation()
    console.log("0 h1 Event Listener");
  },
  { capture: false,once:true }
);

// blue.addEventListener(
//   "click",
//   (e) => {
//     console.log("1. Blue Event Listener");
//   },
//   { once: false }
// );

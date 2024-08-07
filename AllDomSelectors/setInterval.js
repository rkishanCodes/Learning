//setInterval() is a method in JavaScript used to repeatedly execute a specified function or code snippet at a fixed interval of time. It continues executing until stopped with clearInterval() or the window is closed.

//syntax:
//setInterval(function, delay[, param1, param2, ...]);
//The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

//This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().

//Parameters:

//func
//A function to be executed every delay milliseconds. The first execution happens after delay milliseconds.

//delay Optional
// The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code.

//arg1, …,argN Optional
//Additional arguments which are passed through to the function specified by func once the timer expires.

//Return value
//The returned intervalID is a numeric, non-zero value which identifies the timer created by the call to setInterval(); this value can be passed to clearInterval() to cancel the interval.

//Callbacks

//When a function is passed as a callback, the value of this depends on how the callback is called, which is determined by the implementor of the API. Callbacks are typically called with a this value of undefined (calling it directly without attaching it to any object), which means if the function is non–strict, the value of this is the global object (globalThis). This is the case for iterative array methods, the Promise() constructor, etc.

// function logThis() {
//   "use strict";
//   console.log(this);
// }

// [1, 2, 3].forEach(logThis); // undefined, undefined, undefined

// A possible solution

//All modern JavaScript runtimes (in browsers and elsewhere) support arrow functions, with lexical this — allowing us to write setInterval(() => this.myMethod()) if we're inside the myArray method.

// const globalObject = this;
// const foo = () => this;
// console.log(foo() === globalObject); // true
// console.log(this);

// const intervalId=setInterval(()=>{
//   console.log(1);
// },1000)

// console.log(typeof intervalId);
// setTimeout(()=>{
//   console.log(2);
// },10000)

// const setTimeoutid=setTimeout(()=>{
//   console.log(2);
//   clearInterval(intervalId);
// },1000)

// console.log( "settimeout ",setTimeoutid);
// clearInterval(intervalId);
// console.log( "setinterval ",intervalId);

//setTimeout() global function
//The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

// syntax

//setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
// Parameters
// functionRef
// A function to be executed after the timer expires.

//When you call clearInterval(intervalId), it stops the interval timer associated with the given interval ID and clears the timer from memory. However, it doesn't affect the variable intervalId itself. After calling clearInterval(), intervalId will still hold the same value (the interval ID), but the interval timer it refers to will no longer be active.

const timer1 = setInterval(a, 1000);
// const timer2 = setTimeout("console.log('true')", 4000);
// const timer3 = setTimeout(a, 3000, "kishan", [1, 2, 3], { name: "kishan" });

// clearTimeout(timer1);
// // clearTimeout(timer2);
// // clearTimeout(timer3);

function a() {
  console.log(arguments.length);

  for (let i = 0; i < arguments.length; i++) console.log(arguments[i]);
  // return "console.log('true')";
}

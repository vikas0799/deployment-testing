//https://medium.com/@lydiahallie/javascript-visualized-promises-async-await-a3f1aad8a943


// console.log("Start");


// setTimeout(function() {
//   console.log("Callback");
//   queueMicrotask(function() {
//     console.log("Microtask 2");
//   });
// }, 0);
// queueMicrotask(function() {
//     console.log("Microtask 1");
//   });
  
// console.log("End"); // Script continues to run




// console.log("Start");

// function doSomethingAsync(callback) {
//   // Simulate asynchronous operation
//   setTimeout(() => {
//     callback();
//   }, 0);
// }

// doSomethingAsync(function() {
//   console.log("Inside doSomethingAsync (callback)");
//   queueMicrotask(function() {
//     console.log("Microtask after callback");
//   });
// });

 console.log("End");

queueMicrotask(()=>{
    console.log("hello");
})
setTimeout(() => {
    queueMicrotask(()=>{
        console.log("inside settimeout");
    })
    console.log("hii");
}, 0);
console.log("start");
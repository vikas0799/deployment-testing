// Javascript is the synchronous single-threaded language
//  but with the help of event-loop and promises,
//   JavaScript is used to do asynchronous programming.

// console.log("hello");

// setTimeout(() => {
//     console.log("hello");
// }, 5000);

// console.log("hii");


console.log("Start"); // Executed immediately

setTimeout(function() {
  console.log("This will be logged after 2 seconds");
}, 2000);

setInterval(function() {
  console.log("This will be logged every 1 second");
}, 1000);

console.log("End (script continues to run)"); // Executed immediately after "Start"

for (let i = 0; i < 2; i++) {
  var date = new Date();
  console.log(date, " ", i);

  console.log("red", i);

  setTimeout(() => {
    var date = new Date();
    console.log(date);
    console.log("yellow", i);
  }, 3000);

  setTimeout(() => {
    var date = new Date();
    console.log(date);
    console.log("green", i);
  }, 5000);

  setTimeout(() => {}, 9000);
}

// let: Each iteration creates a new block-scoped variable, allowing the setTimeout callbacks to capture the correct value of i at the time the iteration runs.
// var: There is only one shared i, so by the time the asynchronous code runs, i has the value it held at the end of the loop.

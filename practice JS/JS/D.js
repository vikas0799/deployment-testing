setInterval(() => {
    var date = new Date();
  console.log(date);

  console.log("red");

  setTimeout(() => {
    var date = new Date();
    console.log(date);
    console.log("yellow");
  }, 3000);

  setTimeout(() => {
    var date = new Date();
    console.log(date);
    console.log("green");
  }, 5000);

}, 9000);
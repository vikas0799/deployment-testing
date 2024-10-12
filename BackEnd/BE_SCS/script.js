// let a=90;
// let b=902;

// // object_destructering
// module.exports={first:a,second:b};
var figlet = require("figlet");

figlet("john ? Patel", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
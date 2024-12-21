const http=require("http");
const fs=require("fs");
const qs=require("querystring");

let readdata=fs.readFileSync("User.json","utf-8");
console.log(typeof(readdata));
console.log(readdata);
   
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
//   console.log(req.headers);
console.log("hiii");
  console.log(req.url);
  
  
// console.log(res.listenerCount());

   res.end("hello frontend developnet")
}).listen(8080);
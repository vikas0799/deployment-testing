var http = require('http');
var fs = require('fs');
const hostname = '127.0.0.1';

  http.createServer((req,res)=>{
      let data= fs.readFileSync("user.json","utf-8");
    //   console.log(typeof(data));
    //   console.log(data);
    //    qs.decode(data);
    //   console.log(data);
    //   console.log(typeof(data));
    //    data.toString();
    //    console.log(data);
       console.log(data);
      let jsondata= JSON.parse(data);
      console.log(jsondata);
      let jsonstring=JSON.stringify(jsondata);
      console.log(jsonstring);
      
      
      res.write(jsonstring);
      res.end("sending resopnce")
  }).listen(3000,hostname);
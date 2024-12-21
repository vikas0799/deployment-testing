const http=require("http");
const fs=require("fs");
// console.log(fs);

// console.log(http);
const server=http.createServer((req,res)=>{
    console.log("request comming from client we have to repond");
    res.write("<h1>bye</h1>");
    res.write("<h1>be</h1>");
    fs.appendFileSync('message.txt', 'data to append', (err) => {
      if (err) throw err;
      console.log('The "data to append" was appended to file! /n ');
    });
  let data=fs.readFileSync("message.txt");
  console.log(data);
  
    // res.getHeader("vikas");
    res.end("hiiii");
});

// console.log(server.listen());
let x=server.listen(3000,()=>{
    console.log("server is running at 3000 port");
    
})
// console.log(typeof(x));




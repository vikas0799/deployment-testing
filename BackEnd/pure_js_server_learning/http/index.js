// console.log("hello");

const http=require("http");
// console.log(http);
const fs=require('fs');


 const server= http.createServer((req,res)=>{
    console.log("requesting");
    let date=new Date();
    fs.appendFile("file1.txt",`\n hello from chitkara at ${date}`,"utf8",(error)=>{
         if(error)throw error;
         console.log("logged successfully");
         
    })
    // console.log(req);
    // res.json({
    //     "name":"vikas patel",
    //     "age":25,
    //     "id":234
    // })
    if(req.url=="/"){
        res.end("welcome to home page ")
    }
    else{
        if(req.url=="/about"){
            res.end("<h1>welcome to about page</h1>");
            
        }
        else{
            res.end("error 404 not fount route");
        }
    }
  })

server.listen(8008,()=>{console.log("helo");
})
const express=require("express");
const app=express();
const PORT=9000;
console.log("server starting........");

app.use((req,res,next)=>{
    // const name="vikas patel";
    req.name="vikas patel";
    console.log(req.path,req.url);
    next();
    
})

app.get("/",(req,res)=>{
    console.log("accessed home page",req.name);
    // console.log(req);
    console.log(req.route);
    res.send("home page");
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
})

console.log("server ending ......");

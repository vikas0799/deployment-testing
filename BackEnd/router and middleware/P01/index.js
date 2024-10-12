const express=require("express");
const app=express();
const port=8000;
let i=0;
const router = express.Router();
console.log(router);
console.log("hello");



// This middleware runs all time
app.use((req,res,next)=>{
    //middlware runs for each req and can be used for authentication/authorisation, server static files, log , 
//     Parsing data.// Handling authentication.// Managing errors.// Serving static files.// Logging requests. 
    // console.log(req.rawHeaders);
    i++;
    console.log("passing first middleware",i);
    next();
})
app.get("/",(req,res)=>{
    console.log("in home page route");
    res.send("<h1>request home page </h1>")
    
})

// // This middleware runs only for "/admin" route
// app.use('/admin', (req, res, next) => {
//     console.log('Admin page accessed');
//     next();
//   });
  
//   // Route handler for "/admin"
//   app.get('/admin', (req, res) => {
//     res.send('Welcome to the Admin page');
//   });
//   // Route handler for "/admin"
//   app.post('/admin', (req, res) => {
//     res.send('Welcome to the Admin page');
//   });
//   // Route handler for "/admin"
//   app.put('/admin', (req, res) => {
//     res.send('Welcome to the Admin page');
//   });
//   // Route handler for "/admin"
//   app.delete('/admin', (req, res) => {
//     res.send('Welcome to the Admin page');
//   });

app.listen(port,()=>{
    console.log(`app is running on ${port}`);
    
})

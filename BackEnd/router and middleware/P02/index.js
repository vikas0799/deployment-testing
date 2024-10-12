const express=require("express");
const app=express();
const PORT=8000;



app.use((req,res,next)=>{
    console.log("hit request......");
    next();
    
})

// Middleware to simulate an error
app.use((req, res, next) => {
    const error = new Error('Something went wrong!');
    next(error); // Pass the error to the error-handling middleware
  });
  
  // Error-handling middleware
  app.use((err, req, res, next) => {
    console.error(err.message);
    console.log(err);
    
    res.status(500).send('Internal Server Error');
  });
  

// app.use((req, res, next) => {
//     if (!req.headers['x-auth-token']) {
//       res.status(403).send('Forbidden');
//     } else {
//       next(); // Call next middleware if the token is present
//     }
//   });


  app.get("/",(req,res)=>{
    console.log(req.rawHeaders);
    res.send("home page")
  })

// app.use("/about",aboutRouter);





app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
})
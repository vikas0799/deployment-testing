const express=require("express");
const app=express();
const PORT=9000;
// const route=express.Router();
// console.log(route);
const itemsRouter = require('./routes/items');
const aboutRouter=require("./routes/about")
const morgan = require('morgan');

console.log("server starting........");



app.use((req,res,next)=>{
    // console.log(req.path,req.url);
    next();
    
})

// Use morgan for logging HTTP requests
app.use(morgan('combined'));
// console.log(module);


// app.use(express.json());
app.use('/items', itemsRouter); // Mount the router on "/items" path
app.use('/about',aboutRouter);
app.get("/",(req,res)=>{
    res.send("home page");
})

// 404 handler (must come after all other routes)
app.use((req, res) => {
    res.status(404).send('Page not found');
  });

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
})

console.log("server ending ......");

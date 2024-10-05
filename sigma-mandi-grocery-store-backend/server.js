require('dotenv').config()
const cors = require("cors");
const express = require('express');
const mongoose = require('mongoose');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');
const paymentRoute = require('./routes/order');

//express app
const app = express()

//middleware
app.use(express.json())
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/products', shopRoutes);
app.use('/api/user', userRoutes);
app.use("/api/pay", paymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
const Shop = require('../models/shopModel')
const mongoose = require('mongoose')

//GET all products
const getProducts = async (req, res) => {
    const products = await Shop.find()

    res.status(200).json(products)
}

//GET single product
const getProduct = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.Object.isValid(id)) {
        return res.status(404).json({error: 'No such product'})
    }

    const product = await Shop.findById(id)

    if(!product) {
        return res.status(404).json({error: 'No such product'})
    }

    res.status(200).json({product})
}

//add new product
const createProduct = async (req, res) => {
    const {id, title, subtitle, description, price, quantity, img, img1, img2, img3, img4} = req.body

    let emptyFields = []

    if(!id) {
        emptyFields.push('id')
    }
    if(!title) {
        emptyFields.push('id')
    }
    if(!subtitle) {
        emptyFields.push('id')
    }
    if(!description) {
        emptyFields.push('id')
    }
    if(!price) {
        emptyFields.push('id')
    }
    if(!quantity) {
        emptyFields.push('id')
    }
    if(!img) {
        emptyFields.push('id')
    }
    if(!img1) {
        emptyFields.push('id')
    }
    if(!img2) {
        emptyFields.push('id')
    }
    if(!img3) {
        emptyFields.push('id')
    }
    if(!img4) {
        emptyFields.push('id')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'please fill in all the details', emptyFields})
    }

    //add doc to db
    try {
        const product = await Shop.create({id, title, subtitle, description, price, quantity, img, img1, img2, img3, img4})
        res.status(200),json(product)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const createProducts = async (req, res) => {
    const {id, title, subtitle, description, price, quantity, img, img1, img2, img3, img4} = req.body
    try {
        const newProduct = new Shop(req.body);
        const savedProduct = await newProduct.save();
        console.log("Product Added Successfully...");
        console.log(newProduct);
        res.json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    getProducts,
    getProduct,
    createProducts
}
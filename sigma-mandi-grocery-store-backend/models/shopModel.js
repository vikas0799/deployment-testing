const mongoose = require('mongoose')

const Schema = mongoose.Schema

const shopSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    img1: {
        type: String,
        required: true
    },
    img2: {
        type: String,
        required: true
    },
    img3: {
        type: String,
        required: true
    },
    img4: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Shop', shopSchema, 'productDataz');
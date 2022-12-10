const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    desc: {
        type: String
    }, 
    store: {
        type: String
    },
    img: [
        {url: String}
    ],
    sec_img: [
        {url: String}
    ]
})

const Product = mongoose.model('products', productSchema);
module.exports = Product;

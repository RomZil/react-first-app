const Product = require("../modules/products")
const connectDB = require("../index.js")

const data = require("../data/products")


connectDB();

module.exports.seedProducts = async () => {
    try {
        await Product.deleteMany()
        await Product.insertMany(data)
        // console.log("inserted " + data)
    } catch(err) {
        // console.log("errorrr " + err.message)
    }
}

module.exports.getProducts = async () => {
    try {
        const products  = await Product.find()
        // console.log("found  " + products)
        return products
    } catch(err) {
        // console.log("errorrr " + err.message)
    }
}

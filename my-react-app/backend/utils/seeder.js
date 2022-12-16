const Product = require("../modules/products")
const connectDB = require("../index.js")

const data = require("../data/products")


connectDB();

module.exports.seedProducts = async () => {
    try {
        await Product.deleteMany()
        await Product.insertMany(data)
    } catch(err) {
        console.log("error in seeding initial products " + err.message)
    }
}

module.exports.getProducts = async () => {
    try {
        const products  = await Product.find()
        return products
    } catch(err) {
        console.log("error get products " + err.message)
    }
}

module.exports.insertObjectFromCart = async (item) => {
    try {
        console.log("Item successfully inserted to db")
        await Product.insertMany([item])
    } catch(err) {
        console.log("error insert new cart product" + err.message)
    }
}
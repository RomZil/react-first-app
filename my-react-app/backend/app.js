const express = require('express')
const PORT = 4000;
const app = express()
const data = require("./data/products.js")
const Product = require("./modules/products")
const connectDB = require("./index.js");
var cors = require('cors');
const { seedProducts, getProducts } = require("./utils/seeder");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}


app.listen(PORT, () => {
    console.log('welcome')
})

app.use(cors(corsOptions));

connectDB();
seedProducts();

app.get('/products', async (req, res) => {
    const products = await getProducts()
    res.send({
        products: products
    })
})

// app.listen(PORT)




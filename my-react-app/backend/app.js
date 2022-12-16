const express = require('express')
const PORT = 4000;
const app = express()
const data = require("./data/products.js")
const Product = require("./modules/products")
const Order = require("./modules/order")
const connectDB = require("./index.js");
var cors = require('cors');
const bodyParser = require("body-parser")
const { seedProducts, getProducts, insertObjectFromCart } = require("./utils/seeder");

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
});

app.post("/order", async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
});
app.use(bodyParser.json()) // handle json data
app.use(bodyParser.urlencoded({ extended: true })) // handle URL-encoded data

app.post("/add-cart-item", async (req, res) => {
    console.log("Item successfully recived in server")
    await insertObjectFromCart(req.body.item)
})

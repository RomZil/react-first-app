var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
const Products = require("./products");
const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
  items: [{ type: Schema.Types.ObjectId, ref: "products" }],
});

const Order = mongoose.model("order", orderSchema);
module.exports = Order;
const axios = require("axios")

module.exports.dataFromServer = async function() {
    console.log("-------------------------")
    const { data } = await axios.get("http://localhost:4000/products")
    console.log("The data is " + data)
    return data
}
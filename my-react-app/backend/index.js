const { mongoose } = require("mongoose");

const connectDB = () => {
    mongoose.connect('mongodb://0.0.0.0:27017/', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(con => {
    console.log("-------------------------------")
  }).catch(error => {
    console.log("error in connectint to db " + error)
  })
}

module.exports = connectDB

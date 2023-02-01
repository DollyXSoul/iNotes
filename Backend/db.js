const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const mongoURI = "mongodb://localhost:27017/?directConnection=true"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to the mongodb");
    })
}
module.exports = connectToMongo;
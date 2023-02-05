require('dotenv').config();
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const mongoURI = process.env.URI;

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to the mongodb");
    })
}
module.exports = connectToMongo;

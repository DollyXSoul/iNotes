require('dotenv').config();
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const mongoURI = process.env.URI;

const connectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(() => console.log('Connected to MongoDB'))
        .catch(e => console.log(e));
}
module.exports = connectToMongo;

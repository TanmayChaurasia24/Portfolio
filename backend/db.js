const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/portfolio"; // Replace with your actual database name

const connectToMongo= ()=> {
    mongoose.connect(mongoURI,{useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log("Connected to MongoDB"))
        .catch((error) => console.log(`Error connecting to MongoDB: ${error}`));
};

module.exports = connectToMongo; 

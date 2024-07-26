const mongoose = require('mongoose');
const mongoURI = "mongodb://root:password@mongo:27017/portfolio?authSource=admin"; // Replace with your actual credentials and database name

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("Connected to MongoDB"))
        .catch((error) => console.log(`Error connecting to MongoDB: ${error}`));
};

module.exports = connectToMongo;

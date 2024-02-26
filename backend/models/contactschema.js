const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    number:{
        type: Number, // Corrected the data type
        required: true,
        unique: true
    }
});

module.exports = model('ContactUser', contactSchema); // Corrected model name and schema variable name

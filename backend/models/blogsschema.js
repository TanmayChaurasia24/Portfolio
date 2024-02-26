const mongoose = require('mongoose');

const blogsschema = new mongoose.Schema({
    title: {type:String,reqired:true},
    description: {type:String,reqired:true}
});

module.exports = mongoose.model('blogs',blogsschema)
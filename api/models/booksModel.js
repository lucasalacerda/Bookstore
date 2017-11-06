var mongoose = require('mongoose');

// Book Schema

var bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true 
    },
    genre:{
        type: String,
        required: true 
    },
    description:{
        type: String,
        required: false 
    },
    author:{
        type: String,
        required: true 
    },
    publisher:{
        type: String,
        required: false 
    },
    pages:{
        type: String,
        required: false 
    },
    image_url:{
        type: String,
        required: false 
    },
    buy_url:{
        type: String,
        required: false 
    },
    create_date:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Book', bookSchema);
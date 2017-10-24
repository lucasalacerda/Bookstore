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

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books

module.exports.getAll = function(callback, limit){
    Book.find(callback).limit(limit);
}

// Get Book by id

module.exports.getId = function(id, callback){
    Book.findById(id, callback);
};

// Add Book

module.exports.add = function(book, callback){
    Book.create(book, callback);
}

// Update Book

module.exports.update = function(id, book, callback){
    var query = {_id: id};
    Book.findOneAndUpdate(query, book, callback);
}

// Delete Book

module.exports.delete = function(id, callback){
    var query = {_id: id};
    Book.findByIdAndRemove(query, callback)
}
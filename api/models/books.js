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

module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

// Get Book by id

module.exports.getBookById = function(id, callback, limit){
    Book.findById(id, callback);
}

// Add Book

module.exports.addBooks = function(book, callback){
    Book.create(book, callback);
}

// Update Book

module.exports.updateBook = function(id, book, options, callback){
    var query = {_id: id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url
    };
    Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book

module.exports.deleteBook = function(id, callback){
    var query = {_id: id};
    Book.findByIdAndRemove(query, callback)
}
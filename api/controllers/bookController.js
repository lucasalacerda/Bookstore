var Book = require('../models/booksModel');

// Get Books

module.exports.getAll = function(callback, limit){
    Book.find(callback).limit(limit);
}

// Get Book by id

module.exports.getId = function(id, callback){
    Book.findById(id, callback);
};

module.exports.getTitle = function(title_param, callback){
    Book.find({title: title_param});
};

// Add Book

module.exports.add = function(book, callback){
    Book.create(book, callback);
}

// Update Book

module.exports.update = function(id, book, options,  callback){
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

module.exports.delete = function(id, callback){
    var query = {_id: id};
    Book.findByIdAndRemove(query, callback)
}
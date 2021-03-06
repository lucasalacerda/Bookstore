var Genre = require('../models/genresModel');


// Get Genres

module.exports.getAll = function(callback, limit){
    Genre.find(callback).limit(limit);
}

// Add Genre

module.exports.add = function(genre, callback){
    Genre.create(genre, callback);
}

// Update Genre

module.exports.update = function(id, genre, options, callback){
    var query = {_id: id};
    var update = {
        name: genre.name 
    }
    Genre.findOneAndUpdate(query, update, options, callback);
}

// Delete Genre

module.exports.delete = function(id, callback){
    var query = {_id: id};
    Genre.findByIdAndRemove(query, callback)
}
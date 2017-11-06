const User = require('../models/userModel')
// Get users

module.exports.getAll = function(callback, limit){
    User.find(callback).limit(limit);
}

module.exports.add = function(user, callback){
    User.create(user, callback);
}

module.exports.update = function(id, user,  callback){
    var query = {_id: id};
        var update = {
            name: user.title,
            email: user.genre,
            password: user.description,
            picture: user.author,
            type: user.publisher
        };
    User.findOneAndUpdate(query, update, callback);    
}

// Delete user

module.exports.delete = function(id, callback){
    var query = {_id: id};
    User.findByIdAndRemove(query, callback)
}
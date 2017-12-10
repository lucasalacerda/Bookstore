const User = require('../models/userModel');
const bcrypt = require('bcrypt');
// Get users

module.exports.getAll = function (callback, limit) {
    User.find(callback).limit(limit);
}

module.exports.addCheck = function(email, password, callback){
    User.findOne({'email': email}, function(err, user){
            if(err){
                callback('Errorsss');
            }
            else if(user){
                callback('This credentials is already in use');
            }
            else {
                var newUser = new User();
                newUser.email = email;
                newUser.password = newUser.generatePassword(password);
                newUser.token = newUser.generateToken(email, password);
                newUser.save(function(err, user){
                    if(err){
                        callback('Errorsss');
                    }
                    else{
                        callback(user);
                    }
                })
            }
    });
}

module.exports.login = function(email, password, callback){
    User.findOne({'email': email}, function(err, user){
        if(err){
            callback('Error');
        }
        else if(user){
            if(user.checkPassword(password)){
                callback(user.token);
            }
            else{
                callback(`wrong password ${user.password} + ${password}`);
            }
        }
        else{
            callback('user is not on the database');
        }
    })
}    

module.exports.listOne = function(token, callback){
    User.findOne({'token': token}, function(err, user){
        if(err){
            callback('Error');
        }
        else if(user){
            callback(
            {
              'email': user.email
            });
        }
        else{
            callback('User not on the database');
        }
    })
}
module.exports.authenticate = function(token, callback){
    User.findOne({'token': token}, function(err, user){
        if(err){
            callback(false);
        }
        else if(user){
            callback(true);
        }
        else{
            callback(false);
        }
    })
}

module.exports.add = function (user, callback) {
    User.create(user, callback);
}

module.exports.update = function (id, user, callback) {
    var query = { _id: id };
    var update = {
        name: user.name,
        email: user.email,
        password: user.password,
        passwordConf: user.passwordConf,
        picture: user.picture,
        type: user.type
    };
    User.findOneAndUpdate(query, update, callback);
}

module.exports.delete = function(id, user, callback){
    var query = {_id: id};
    Book.findByIdAndRemove(query, callback)

}
/*
module.exports.authenticate = function (email, password, callback) {
    User.findOne({ email: email })
        .exec(function (err, user) {
            if (err) {
                return callback(err);
            }
            else if (!user) {
                var err = new Error('User not found!');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
        });
}

*/

// Delete user

module.exports.delete = function (id, callback) {
    var query = { _id: id };
    User.findByIdAndRemove(query, callback)
}

//module.exports.
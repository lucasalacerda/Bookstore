const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Book Schema

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    passwordConf: {
        type: String,
        required: false,
    },
    token:{
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: false
    }
});

userSchema.methods.generateToken = function(email, name){
    return jwt.sign({
        'email': email,
        'name': name,
    }, 'secret');
}

userSchema.methods.generatePassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9))
}

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}
/*
userSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        user.passwordConf = hash;
        next();
    })
});
*/

module.exports = mongoose.model('User', userSchema)

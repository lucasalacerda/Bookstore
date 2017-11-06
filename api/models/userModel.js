var mongoose = require('mongoose');

// Book Schema

var userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    email:{
        type: String,
        required: true 
    },
    password:{
        type: String,
        required: true 
    },
    picture:{
        type: String,
        required: true 
    },
    type:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema)

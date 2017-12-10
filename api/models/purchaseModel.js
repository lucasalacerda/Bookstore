var mongoose = require('mongoose');

// Book Schema

var purchaseSchema = mongoose.Schema({
    title:{
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
    user:{
        type: String,
        required: true 
    },
    create_date:{
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model('Purchase', purchaseSchema);
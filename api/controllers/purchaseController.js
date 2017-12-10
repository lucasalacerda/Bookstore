const Purchase = require('../models/purchaseModel');

// Get purchase
module.exports.getAll = function(callback, limit){
    Purchase.find(callback).limit(limit);
}
// Get purchase by id
module.exports.getId = function(id, callback){
    Purchase.findById(id, callback);
};
// Add purchase
module.exports.add = function(purchase, callback){
    Purchase.create(purchase, callback);
}

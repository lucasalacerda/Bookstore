var express = require('express');
var router = express.Router();

Purchase = require('../controllers/purchaseController.js');

// middleware that is specific to this router
router.get(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the about route
router.get('/api/purchases', function(req, res) {
    Purchase.getAll(function(err, purchases){
        if(err){
            throw err;
        }
        res.json(purchases); 
    });
});

router.get('/api/purchases/:_id', function(req, res){
    Purchase.getId(req.params._id, function(err, purchase){
        if(err){
            throw err;
        }
        res.json(purchase);
    });
});

router.post('/api/purchases', function(req, res){
    var purchase = req.body;
    Purchase.add(purchase, function(err, purchase){
        if(err){
            throw err;
        }
        res.json(purchase);
    });
});

module.exports = router;

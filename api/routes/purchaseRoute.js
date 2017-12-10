const express = require('express');
const router = express.Router();

const Purchase = require('../controllers/purchaseController');
const User = require('../controllers/userController');

// middleware that is specific to this router
router.get(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

function getToken(req, res, next){
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined'){
        req.token = header;
        next(); 
    }
    else{
        res.sendStatus(403);
    }
}

// define the about route
router.get('/api/purchases', getToken, function(req, res) {
    const token = req.token;
    User.authenticate(token, function(resp){
        if(resp === true){
            Purchase.getAll(function(err, purchases){
                if(err){
                    throw err;
                }
                res.json(purchases); 
            });
        }
        else{
            res.sendStatus(403);
        }
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
    const purchase = req.body;
    Purchase.add(purchase, function(err, purchase){
        if(err){
            throw err;
        }
        res.json(purchase);
    });
});

module.exports = router;

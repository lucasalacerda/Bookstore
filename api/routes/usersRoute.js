var express = require('express');
var router = express.Router();

User = require('../controllers/userController.js');

router.get(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

router.get('/api/users', function(req, res){
    User.getAll(function(err, user){
        res.json(user);
    });
});

router.post('/api/users', function(req, res){
    user = req.body;
    User.add(add, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    });
});

module.exports = router;

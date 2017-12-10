var express = require('express');
var router = express.Router();

const User = require('../controllers/userController.js');

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
router.post('/api/users/register', function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    User.addCheck(email, password, function(resp){
        res.json(resp);
    })
});

router.get('/api/users/list', getToken, function(req, res){
    const token = req.token;
    User.listOne(token, function(resp){
        res.json(resp);
    });
});

router.post('/api/users/login', function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    User.login(email, password, function(resp){
        res.json(resp);
    })
})

router.get(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/api/users', function (req, res) {
    User.getAll(function (err, user) {
        res.json(user);
    });
});
router.delete('/api/users/:_id', function(req, res){
    var id = req.params._id;
    User.delete(id, function(err, user){
        if (err) {
            throw err;
        }
        res.json(user);
    })
})

router.get('/api/users'), function(req, res){
    User.authenticate(function (err, user){
        res.json(user);
    })
}

router.get('/api/logout', function(req, res, next) {
    if (req.session) {
      // delete session object
      req.session.destroy(function(err) {
        if(err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
  });

router.get('/api/users/authenticate', function(req, res, next){
    var email = req.params.email;
    var password = req.params.password;
    User.authenticate(email, password, function(err, user){
        res.json(user);
        
    });

});

router.put('/api/users/:_id', function(req, res){
    var id = req.params._id;
    var user = req.body;
    User.update(id, user, {}, function(err, user){
        if(err){
            throw err;
        }
        res.json(user); 
    });
});

router.post('/api/users', function (req, res) {
    var user = req.body;
    User.add(user, function (err, user) {
        if (err) {
            throw err;
        }
        res.json(user);
    });
});


module.exports = router;

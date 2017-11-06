var express = require('express');
var router = express.Router();

Genre = require('../controllers/genreController.js');

router.get(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/api/genres', function(req, res){
    Genre.getAll(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres); 
    });
});

router.post('/api/genres', function(req, res){
    var genre = req.body;
    Genre.add(genre, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre); 
    });
});

router.put('/api/genres/:_id', function(req, res){
    var id = req.params._id;
    var genre = req.body;
    Genre.update(id, genre, {}, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });  
});

router.delete('/api/genres/:_id', function(req, res){
    var id = req.params._id;
    Genre.delete(id, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre); 
    });
});

module.exports = router;

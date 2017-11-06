var express = require('express');
var router = express.Router();

Book = require('../controllers/bookController.js');

// middleware that is specific to this router
router.get(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the about route
router.get('/api/books', function(req, res) {
    Book.getAll(function(err, books){
        if(err){
            throw err;
        }
        res.json(books); 
    });
});

router.get('/api/books/:_id', function(req, res){
    Book.getId(req.params._id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

router.get('/api/books?:title', function(req, res){
    Book.getTitle(req.body.title, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

router.post('/api/books', function(req, res){
    var book = req.body;
    Book.add(book, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

router.put('/api/books/:_id', function(req, res){
    var id = req.params._id;
    var book = req.body;
    Book.update(id, book, {}, function(err, book){
        if(err){
            throw err;
        }
        res.json(book); 
    });
});

router.delete('/api/books/:_id', function(req, res){
    var id = req.params._id;
    Book.delete(id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

module.exports = router;

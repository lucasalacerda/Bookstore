const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(cors());

app.use(bodyParser.json());

const routes = require('./api/routes/routes');

Genre = require('./api/models/genres.js');
Book = require('./api/models/books.js');

//Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;


app.use(function(err, req, res, next) {
    if(res.status(404)){
        res.redirect('/');
    }
  });

app.get('/', function(req, res, next){
    res.send('Please use /api/books or /api/genres');
    
});

app.get('/api', function(req, res, next){
    res.send('Please use /api/books or /api/genres');
    
});

app.get('/api/genres', function(req, res, next){
    Genre.getAll(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres); 
    });
});

app.post('/api/genres', function(req, res, next){
    var genre = req.body;
    Genre.add(genre, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre); 
    });
});

app.put('/api/genres/:_id', function(req, res, next){
    var id = req.params._id;
    var genre = req.body;
    Genre.update(id, genre, {}, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre); 
    });
});

app.delete('/api/genres/:_id', function(req, res, next){
    var id = req.params._id;
    Genre.delete(id, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre); 
    });
});

app.get('/api/books', function(req, res, next){

    Book.getAll(function(err, books){
        if(err){
            throw err;
        }
        res.json(books); 
    });
});

app.get('/api/books/:_id', function(req, res, next){
    Book.getId(req.params._id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book); 
    });
});

app.post('/api/books', function(req, res, next){

    var book = req.body;
    Book.add(book, function(err, book){
        if(err){
            throw err;
        }
        res.json(book); 
    });
});

app.put('/api/books/:_id', function(req, res, next){

    var id = req.params._id;
    var book = req.body;
    Book.update(id, book, {}, function(err, book){
        if(err){
            throw err;
        }
        res.json(book); 
    });
});

app.delete('/api/books/:_id', function(req, res, next){
    var id = req.params._id;
    Book.delete(id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book); 
    });
});


app.listen(3000, function() {
    console.log('Running on port 3000'); 
    
});



const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


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

app.get('/', function(req, res){
    Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
    eader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Origin', 'Content-Type');
    
    
    if(res.status(404)){
        res.send('Please use /api/books or /api/genres');
    }
    
});

app.get('/api', function(req, res){
    res.send('Please use /api/books or /api/genres');
    
});

app.get('/api/genres', function(req, res){
    Genre.getAll(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres); 
    });
});

app.post('/api/genres', function(req, res){
    var genre = req.body;
    Genre.add(genre, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre); 
    });
});

app.put('/api/genres/:_id', function(req, res){
    var id = req.params._id;
    var genre = req.body;
    Genre.update(id, genre, {}, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre); 
    });
});

app.delete('/api/genres/:_id', function(req, res){
    var id = req.params._id;
    Genre.delete(id, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre); 
    });
});

app.get('/api/books', function(req, res){

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    
    Book.getAll(function(err, books){
        if(err){
            throw err;
        }
        res.json(books); 
    });
});

app.get('/api/books/:_id', function(req, res){
    Book.getId(req.params._id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book); 
    });
});

app.post('/api/books', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    
    var book = req.body;
    Book.add(book, function(err, book){
        if(err){
            throw err;
        }
        res.json(book); 
    });
});

app.put('/api/books/:_id', function(req, res){

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');

    var id = req.params._id;
    var book = req.body;
    Book.update(id, book, {}, function(err, book){
        if(err){
            throw err;
        }
        res.json(book); 
    });
});

app.delete('/api/books/:_id', function(req, res){
    var id = req.params._id;
    Book.delete(id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book); 
    });
});


app.listen(3000);
console.log('Running on port 3000'); 



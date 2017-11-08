const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const booksRoute = require('./api/routes/booksRoute');
const userRoute = require('./api/routes/usersRoute');
const genresRoute = require('./api/routes/genresRoute');
const purchaseRoute = require('./api/routes/purchaseRoute');

app.use(cors())

app.use(bodyParser.json());

app.use(booksRoute, userRoute, genresRoute, purchaseRoute);

//Connect to mongoose
setTimeout(function() {
    mongoose.connect('mongodb://localhost/bookstore');
}, 2000);

app.get(function(err, req, res, next) {
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

app.listen(3000, function() {
    console.log('Running on port 3000'); 
});





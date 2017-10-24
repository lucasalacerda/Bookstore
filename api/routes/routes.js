var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.get(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res, next) {
    next();
});
// define the about route
router.get('/api/genres', function(req, res, next) {
    Genre.getAll(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres); 
    });
    next();
});

module.exports = router;

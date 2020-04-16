var express = require('express');
var router = express.Router();

const registerController = require('../controllers/registerController')

/* GET home page. */

// Home
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Registro

router.get('/registro', function(req, res, next) {
  res.render('auth/register');
});

router.post('/registro',registerController.store);

// Login
router.get('/', function(req, res, next) {
  res.render('auth/login');
});



module.exports = router;

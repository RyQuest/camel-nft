var express = require('express');
var router = express.Router();

const ContactController=require('../controllers/ContactController');
const Contact = require('../models/Contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/create-contact',ContactController.addContact)

module.exports = router;

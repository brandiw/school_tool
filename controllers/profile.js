var express = require('express');
var moment = require('moment');
var passport = require('../config/passportConfig');
var staffLoggedIn = require('../middleware/staffLoggedIn');
var db = require('../models');
var router = express.Router();

router.get('/', function(req, res){
  db.course.findAll().then(function(courses){
    console.log(courses);
    res.render('profile', {courses: courses});
  }).catch(function(err){
    console.log('error in /profile', err);
    res.redirect('/');
  });
});

router.get('/:id', function(req, res){
  db.user.findById(req.params.id).then(function(otherUser){
    res.render('guestProfile', {otherUser: otherUser});
  }).catch(function(err){
    console.log('error in /profile/:id', err);
    res.redirect('/');
  });
});



module.exports = router;





















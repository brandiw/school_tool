var express = require('express');
var passport = require('../config/passportConfig');
var staffLoggedIn = require('../middleware/staffLoggedIn');
var db = require('../models');
var router = express.Router();

router.get('/', staffLoggedIn, (req, res) => {
  db.course.findAll()
  .then(courses => {
    res.render('courses/all', { courses })
  })
  .catch(err => {
    console.log('Error in /courses', err);
    res.render('404');
  })
});

router.get('/new', staffLoggedIn, (req, res) => {
  res.send('STUB - New Course');
});

router.get('/:id', staffLoggedIn, (req, res) => {
  db.course.findOne({
    where: {id: req.params.id},
    include: [db.user]
  }).then(function(course){
    db.user.findById(course.teacherId).then(function(teacher){
      res.render('courses/detail', {course: course, teacher: teacher});
    }).catch(function(err){
      console.log('error', err);
      res.render('courses/detail', {course: course, teacher: 'TBD'});
    });

  }).catch(function(err){
    console.log('darn', err);
    res.redirect('/');
  });
});

module.exports = router;

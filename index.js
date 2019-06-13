// Package Requirements
require('dotenv').config();
let express = require('express');
let ejsLayouts = require('express-ejs-layouts');
let flash = require('connect-flash');
let moment = require('moment')
let path = require('path');
let session = require('express-session');

// Middleware
let isLoggedIn = require('./middleware/isLoggedIn');
let passport = require('./config/passportConfig');
let staffLoggedIn = require('./middleware/staffLoggedIn');

let app = express();

// Middleware set-up
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.alerts = req.flash();
  res.locals.moment = moment;
  next();
});

// Routers
app.use('/auth', require('./controllers/auth'));
app.use('/profile', isLoggedIn, require('./controllers/profile'));
app.use('/courses', isLoggedIn, require('./controllers/courses'));

// Home route
app.get('/', (req, res) => {
  res.render('home');
});

// Catch-all route
app.get('*', (req, res) => {
  res.render('404');
})

app.listen(process.env.PORT || 3000);

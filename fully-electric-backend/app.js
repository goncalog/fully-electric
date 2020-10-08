const Seller = require('./models/seller');

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const bcrypt = require('bcryptjs');

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

require('./database/mongoConfig');

const contentRouter = require('./routes/content');

const app = express();

app.use(helmet()); // Protects against well known vulnerabilities (e.g. by adding appropriate HTTP headers)
app.use(compression());

// Passport for handling user sessions (e.g. log in)
passport.use(
  new LocalStrategy((username, password, done) => {
    console.log('TEST PASSPORT');
    Seller.findOne({ contact: username }, (err, user) => {
      if (err) { return done(err); }

      if (!user) {
        return done(null, false, { msg: 'Incorrect email' });
      }

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) { return done(err); }

        if (!result) {
          console.log('INCORRECT PASSWORD');
          console.log(`PASSWORD IS: ${user.password}`);
          return done(null, false, { msg: 'Incorrect password' });
        }
      })

      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Seller.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../fully-electric-frontend/build')));

// Add headers
app.use(function (req, res, next) {
  // Website allowed to request content
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.use('/content', contentRouter);

// Handles any requests that doesn't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../fully-electric-frontend/build/index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

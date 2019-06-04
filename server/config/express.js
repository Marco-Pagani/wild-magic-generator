var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    magicksRouter = require('../server.routes');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'could not connect to db'));
  db.once('open', function callback () {
    console.log('Connected to db, Yay!');
    return;
  });
  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  
  /* Serve static files */
  app.use(express.static('client')); // serve all static files available under client folder
  
  /* Use the listings router for requests to the api */
  app.use(magicksRouter);


  /* Go to homepage for all routes not specified */
  app.use('*', function(req, res) {
    res.redirect('/');
  });

  return app;
};  
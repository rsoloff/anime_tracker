'use strict';
var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    routes = require('./config/routes'),
    app = express();

app.use(logger('combined'));
app.use(express.static(__dirname+'/public'));
app.use(bodyParser({extend:false}));
app.use(bodyParser.json());

app.listen(3000, function() {
  console.log('App is listening on port 3000');
});

mongoose.connect('mongodb://localhost/anime_tracker', function(err) {
  if (err) {
    console.log('connection', err);
  } else {
    console.log('connection successful');
  }
});

app.use(routes);

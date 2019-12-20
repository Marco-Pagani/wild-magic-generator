'use strict';

var fs = require('fs'),
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Magic = require('../server.model.js'),
  config = require('./config.js'),
  effects = require('../../magic.json');



var db = mongoose.connect(config.db.uri);
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
//  console.log('Conntected to database');
//});

  var magicData = fs.readFileSync('magic.json');
  var JSONdata = JSON.parse(magicData).entries;

  JSONdata.forEach(function (entry) {
    var newEffect = new Magic(entry);
    newEffect.save(function (err) {
      if (err) throw err;
      console.log('Effect added: ' + entry.index);
    });
  
  });
  console.log('all effects added');

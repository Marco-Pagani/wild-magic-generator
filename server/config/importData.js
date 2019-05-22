'use strict';

var fs = require('fs'),
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Listing = require('./ListingSchema.js'),
  config = require('./config'),
  listings = require('./listings.json');



var db = mongoose.connect(config.db.uri, {useMongoClient: true});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conntected to database');
});

  var magicData = fs.readFileSync('listings.json');
  var JSONdata = JSON.parse(listingData).entries;

  JSONdata.forEach(function (entry) {
    var newListing = new Listing(entry);
    newListing.save(function (err) {
      if (err) throw err;
      console.log('Listing added: ' + entry.code);
    });
  
  });
  console.log('all listings added');

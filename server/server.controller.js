var mongoose = require('mongoose'),
    Magic = require('./server.model.js');

exports.create = function (req, res) {
    var newMagic = new Magic(req.body);
    newMagic.save(function (err, event) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.json(event);
        }
    });
} 

exports.list = function(req, res) {
    Magic.find({}).sort({ code: 1 }).exec(function (err, effects) {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(effects);
      }
    });
    
  };
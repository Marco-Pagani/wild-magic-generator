var mongoose = require('mongoose'),
    Magic = require('server.model.js');

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
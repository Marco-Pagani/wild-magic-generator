var magic = require('server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(magic.list)
    .post(magic.create);


module.exports = router;
var express = require('express');
var router = express.Router();

//This is important, redirects any issues to index
router.get('/', function (req, res, next) {
        res.render('index');

    });

module.exports = router;

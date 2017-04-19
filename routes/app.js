var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({},function(err, doc){
        if(err)
        {
            return res.send('Error, no user');
        }
        res.render('node', {email: doc.email});

    });
    //Moved, to now render if no error res.render('node');
});

router.post('/', function (req,res,next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Miles',
        lastName: 'Robson',
        password: 'test',
        email: email
    });

    user.save();
    res.redirect('/');
});

module.exports = router;

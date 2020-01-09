var express = require('express');
var router = express.Router();
var authService = require('../services/authService');

router.post('', function (req,res,next) {
    console.log('Inside signup route Method');
    authService.registeruser(req.body,function (err, doc) {
        if(!err){
            res.json(doc)
        } else {
            res.json(err);
        }
    })
})

router.post('/userlogin', function(req, res, next) {
    console.log('inside post method');
    authService.loginUser(req.body, function(err, data){
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }
    })
})

router.post('/passwordupdate', function(req,res,next) {
    authService.updatepassword(req.body, function(err,data) {
        if(!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    })
})

module.exports = router;

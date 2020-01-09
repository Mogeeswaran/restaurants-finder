var express = require('express');
var router = express.Router();
var authService = require('../services/authService');

// router.post('/userlogin',funtion(req,res,next) {
//     authService.loginUser(req.body, function(err,data){
//         if(!err){
//             res.json(data);
//         }else{
//             res.json(err);
//         }
//     });
// });

router.post('/', function(req, res, next) {
    console.log('inside post method');
    authService.loginUser(req.body, function(err, data){
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }
    })
})

module.exports = router;

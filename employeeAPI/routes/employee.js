var express = require('express');
var router = express.Router();
var employeeService = require('../services/employeeService');

router.post('/', function(req, res, next){
    console.log(req.body);
    employeeService.createEmployee(req.body, function(err,data){
        if(!err){
            res.json(data);
        } else{
            res.json(err);
        }
    });
});

router.get('/', function(req,res,next){
    employeeService.getEmployee(function(err, data){
        if(!err){
            res.json(data);
        }else{
            res.json(err);
        }
    })
})

module.exports = router;
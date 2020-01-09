
var Register = require('../models/userDetails');
const bycrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

exports.loginUser = function (logindata, callback) {
    var emp = new Register(logindata) 
    console.log(emp);
    Register.find({Email:emp.Email},(err, doc) => {
        if(err) { 
            console.log(err)
        }
        else if(doc.length < 1) {
            var status = {
                info: 'User not registered',
                status: 409
            }
            return callback(err, status);
        } else {
            console.log('Docsriii',doc[0].password);
          //  console.log(emp.password);
          //  console.log(doc.password);
          if (bycrypt.compareSync(emp.password, doc[0].password)) {
              jwt.sign({logindata},'3x6le09r0^p',{expiresIn:'1d'},(err,token) => {
              var status = {
                  info: 'User authenticated successfully',
                  status: 200,
                  data: doc,
                  authtoken: token
              }
              return callback(err,status);
          })
          } else {
              var status = {
                  info:'Invalid Credentials',
                  status: 409
              }
              return callback(err,status);
          }
        }
    })
}
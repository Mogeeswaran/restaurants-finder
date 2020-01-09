// const mongoose = require('mongoose');

// var Register = mongoose.model('RegisterUsers', {
//     fname: { type: String },
//     lname: {type : String},
//     Email: { type: String },
//     password: {type: String},
//     isLoginuser: {type: Number,default:1}

// });



const mongoose = require('./mongo'); //importing connection config
const Schema = mongoose.Schema;

//schema 
const Register = new Schema(
    {
    fname: { type: String },
    lname: {type : String},
    Email: { type: String },
    password: {type: String},
    isLoginuser: {type: Number,default:1}
    }
);
module.exports = mongoose.model('Register', Register);
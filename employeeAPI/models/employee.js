const mongoose = require('./mongo'); //importing connection config
const autoIncrement = require('mongoose-auto-increment'); // for auto incrementing during
const Schema = mongoose.Schema;

//schema 
const Employee = new Schema(
    {
        employeeID: Number,
        name: String,
        phone: String,
        email: String,
        status: String,
        createdBy: String,
        createdOn: { type: Date, default: Date.now },
        updatedBy: String,
        updatedOn: { type: Date, default: Date.now }
    }
);

Employee.plugin(autoIncrement.plugin, {model:'Employee', field:'employeeID', startAt: 1});
module.exports = mongoose.model('Employee', Employee);
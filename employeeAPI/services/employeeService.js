var Employee = require('../models/employee');

exports.createEmployee = function(employeeData, callback){
    console.log(employeeData);
    console.log(callback);

    var employeeDao = new Employee(employeeData);

    employeeDao.save(function(err,data){
        if(!err){
            console.log(data);
        }else{
            console.log(err);
        }
        callback(err,data);
    });

}

exports.getEmployee = function(callback){
    Employee.find(function(err, data){
        if(!err){
            console.log(data);
        }else{
            console.log(err);
        }
        callback(err,data);
    });
}
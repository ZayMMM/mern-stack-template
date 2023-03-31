const { logger } = require('../utils/logger');
const db = require('../database/mysql');
const EmployeeService = require('../service/EmployeeService');
const Employee = db.employee;
var status = require('../utils/statusCode');


// Instantiate the employee service
const employeeService = new EmployeeService(Employee);


// Create and Save a new Tutorial
exports.create = (req, res) => {

};

// Retrieve all Employee from the database.
exports.findAll = (req, res) => {
  var response = { status: status.Success };
  const firstName = req.query.firstName;
  employeeService.findAll(firstName)
    .then(data => {
      response.responseMessage = "Retrieving employees is successful.";
      response.data = data;
      res.send(response);
    })
    .catch(err => {
      logger.error(err.message, err);
      response.status = status.SystemError;
      response.responseMessage = "Some error occurred while retrieving employees.";
      res.send(response);;
    });
};

// Find a single Employee with an employee id
exports.findOne = (req, res) => {
  var response = { status: status.Success };
  const empId = req.params.employeeId;
  employeeService.findEmployeeByEmpId(empId)
    .then(data => {
      if (data) {
        response.responseMessage = "Retrieving employees is successful.";
        response.data = data;
        res.send(response);
      } else {
        response.status = status.ObjectNotFound;
        response.responseMessage = `Cannot find Employee with id=${empId}.`
        res.send(response);
      }
    })
    .catch(err => {
      logger.error(err.message, err)
      response.status = status.SystemError;
      response.responseMessage = `Error retrieving Employee with id=${empId}`
      res.send(response);
    });
};

// Update a Employee by the id in the request
exports.update = (req, res) => {

};

// Delete a Employee with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Employees from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Employees
exports.findAllPublished = (req, res) => {

};
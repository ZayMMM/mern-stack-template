const { exceptions } = require('winston');
const db = require('../database/mysql');
const Employee = db.employee;
const Op = db.Sequelize.Op;



// Create and Save a new Tutorial
exports.create = (req, res) => {

};

// Retrieve all Employee from the database.
exports.findAll = (req, res) => {
const firstName = req.query.firstName;
var condition = firstName ? { firstName: { [Op.like]: `%${firstName}%` } } : null;

Employee.findAll({ where: condition })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving employees."
    });
  });
};

// Find a single Employee with an id
exports.findOne = (req, res) => {
  const id = req.params.employeeId;
  Employee.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Employee with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Employee with id=" + id
      });
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
const Employee = require('../models/Employee');

// Retrieve all Employee (with condition).
exports.findAll = (req, res) => {
  const firstName = req.query.firstName;

  Employee.getAll(firstName, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees."
      });
    else res.send(data);
  });
};

// Resrieve Employee (with employee id)
exports.findOne = (req, res) => {
  const employee_id = req.params.employeeId;
  console.log("Employee Id : " + employee_id);

  Employee.findById(employee_id, (err, data) => {

    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Employee with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Employee with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};
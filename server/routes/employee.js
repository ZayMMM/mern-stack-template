const express = require("express");
const employeeRouter = express.Router();
const EmployeeController = require('../controller/EmployeeController');

employeeRouter
    .route("/:employeeId")
    .get(EmployeeController.getEmployee);

module.exports = employeeRouter;
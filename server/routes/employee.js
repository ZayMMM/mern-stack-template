const express = require("express");
const employeeRouter = express.Router();
const EmployeeController = require('../controller/EmployeeController');

employeeRouter
    .route("/")
    .get(EmployeeController.findAll);

employeeRouter
    .route("/:employeeId")
    .get(EmployeeController.findOne);

module.exports = employeeRouter;
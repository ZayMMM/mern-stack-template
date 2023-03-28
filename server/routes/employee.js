const express = require("express");
const employeeRouter = express.Router();
const employeeController = require('../controller/employeeController');
const auth = require('../middleware/auth');

employeeRouter
    .route("/")
    .get(employeeController.findAll);

employeeRouter
    .use(auth)
    .route("/:employeeId")
    .get(employeeController.findOne);

module.exports = employeeRouter;
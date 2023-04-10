const express = require("express");
const employeeRouter = express.Router();
const employeeController = require('../controller/employeeController');
const auth = require('../middleware/authMiddleware');

employeeRouter
    .route("/")
    .get(employeeController.findAll);

employeeRouter
    .use(auth) // use auth middleware
    .route("/:employeeId")
    .get(employeeController.findOne);

module.exports = employeeRouter;
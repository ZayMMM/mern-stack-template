const { pool } = require('../database/mysql');
const { getEmployee } = require('../services/employeeService');

exports.getEmployee = (req, res) => {
    console.log(req);
    const employee_id = req.params.employee_id;
    console.log("Employee Id : " + employee_id);
    const employee = getEmployee(employee_id);
    res.json(employee);
}
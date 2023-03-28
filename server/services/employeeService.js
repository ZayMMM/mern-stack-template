const { json } = require('body-parser');
const db = require('../services/mysqlService');

async function getEmployee(employeeId) {
    const employee = await db.singleQuery(`SELECT * FROM employee WHERE EmployeeId=${employeeId}`, null);
    console.log("Employee : " + employee);
}

module.exports = {
    getEmployee,
};
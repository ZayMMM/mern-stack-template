const db = require('../services/mysqlService');

async function getEmployee(employeeId) {
    const rows = db.query("SELECT * FROM employee WHERE EmployeeId=${employeeId}", "");
    const data = db.emptyOrRows(rows);
    return data;
}

module.exports = {
    getEmployee,
};
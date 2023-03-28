const { pool } = require('../database/mysql');

// construct
const Employee = function (employee) {
    this.id = employee.Id;
    this.employeeId = employee.EmployeeId;
    this.firstName = employee.FirstName;
    this.lastName = employee.LastName;
    this.err = employee.err;
};

Employee.getAll = (firstName, result) => {
    let query = "SELECT * FROM employee";

    if (firstName) {
        query += ` WHERE FirstName LIKE '%${firstName}%'`;
    }

    pool.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("employees: ", res);
        result(null, res);
    });
};


Employee.findById = (employeeId, result) => {
    pool.query(`SELECT * FROM employee WHERE EmployeeId=${employeeId}`, (err, rows) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (rows.length) {
            console.log("found employee: ", rows[0]);
            result(null, rows[0]);
            return;
        }

        // not found Employee with the employee id
        result({ kind: "not_found" }, null);
    });
}

module.exports = Employee;
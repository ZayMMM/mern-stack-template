const { logger } = require('../utils/loggerUtils');
const db = require('../database/mysql');
const { employeeModel } = db.employee;
const Op = db.Sequelize.Op;

class EmployeeService {

    constructor(employeeModel) {
        this.employeeModel = employeeModel;
    }

    async findAll(firstName) {
        var condition = firstName ? { firstName: { [Op.like]: `%${firstName}%` } } : null;
        const employeeList = this.employeeModel.findAll(({ where: condition }));
        await employeeList.then((data) => {
            data.map((result) => {
                return result.get({plain: true});
            });
        });
        return await employeeList;
    }

    async findEmployeeByEmpId(empId){
        var condition = empId ? {employeeId : {[Op.eq]: `${empId}`}} : null;
        const employee = this.employeeModel.findOne(({ where: condition}));
        return await employee;
    }
}

module.exports = EmployeeService;
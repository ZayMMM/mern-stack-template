module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: 'Id'
        },
        employeeId: {
            type: Sequelize.STRING,
            field: 'EmployeeId'
        },
        firstName: {
            type: Sequelize.STRING,
            field: 'FirstName'
        },
        lastName: {
            type: Sequelize.STRING,
            field: 'LastName'
        },
        profile: {
            type: Sequelize.STRING,
            field: 'Profile'
        },
        email: {
            type: Sequelize.STRING,
            field: 'Email'
        },
        phoneNo: {
            type: Sequelize.STRING,
            field: 'PhoneNo'
        },
        qrCode: {
            type: Sequelize.STRING,
            field: 'QrCode'
        },
        qrExpiredTime: {
            type: Sequelize.DATE,
            field: 'QrExpiredTime'
        },
        status: {
            type: Sequelize.INTEGER,
            field: 'Status'
        },
        localFirstName: {
            type: Sequelize.STRING,
            field: 'LocalFirstName'
        },
        localLastName: {
            type: Sequelize.STRING,
            field: 'LocalLastName'
        },
        createdDateTime: {
            type: Sequelize.DATE,
            field: 'CreatedDateTime'
        },
        updatedDateTime: {
            type: Sequelize.DATE,
            field: 'UpdatedDateTime'
        },
        lastGenerateQrImage: {
            type: Sequelize.STRING,
            field: 'LastGenerateQrImage'
        }
    },
        {
            tableName: 'employee'
        });

    return Employee;
};

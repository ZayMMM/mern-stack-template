require('dotenv').config();
const db = require('../database/mysql');
const Employee = db.employee;
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
var status = require('../utils/statusCodeUtils');

const auth = async (req, res, next) => {
  var response = { status: status.Success };
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[1]
  ) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decodedSecret = Buffer.from(JWT_SECRET, 'base64');
      const decode = jwt.verify(token, decodedSecret);
      console.log(">>> decode: " + JSON.stringify(decode));

      const employee = await Employee.findAll({
        where: {
          employeeId: decode.UserInfo.EmployeeId
        }
      });

      if (!employee) {
        response.status = status.ObjectNotFound;
        response.responseMessage = "Employee not found";
        return res.send(response);
      }

      next();
    } catch (error) {
      console.log(error);
      response.status = status.Unauthorized;
      response.responseMessage = error.message;
      return res.send(response);
    }
  } else {
    response.status = status.Unauthorized;
    response.responseMessage = "Unauthorized";
    return res.send(response);
  }
};

module.exports = auth;
const db = require('../database/mysql');
const Employee = db.employee;
const jwt = require('jsonwebtoken');
const JWT_SECRET = '63f8e5f87d7193001238f150@hgusvtcb^doF6y@^UCwdZPHfg$@$OD|(a%gpDdB$XaFuklfCV!';
const { StringDecoder } = require('node:string_decoder');
const decoder = new StringDecoder('utf8');

const auth = async (req, res, next) => {
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
        res.status(401).json({ error: "Unauthorized." });
        return;
      }

      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: "Unauthorized.." });
    }
  } else {
    res.status(401).json({ error: "Unauthorized..." });
  }
};

module.exports = auth;
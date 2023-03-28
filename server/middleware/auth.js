const jwt = require("jsonwebtoken");
const db = require('../database/mysql');
const Employee = db.employee;

const auth = async (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[1]
  ) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decode = await jwt.verify(token, "fake-jwt-secret");
      const employee = await Employee.findByPk(id);
      if (!employee) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }

      next();
    } catch (error) {
      res.status(401).json({ error: "Unauthorized" });
    }
  }else{
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = auth;
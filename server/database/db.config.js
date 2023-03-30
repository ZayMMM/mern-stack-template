module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root123",
    DB: "eighti_access_control",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
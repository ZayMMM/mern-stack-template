require('dotenv').config();

module.exports = {
    HOST: process.env.MYSQL_DB_HOST || 'localhost',
    USER: process.env.MYSQL_DB_USERNAME || 'root',
    PASSWORD: process.env.MYSQL_DB_PASSWORD || 'root123',
    DB: process.env.MYSQL_DB_URL || "eighti_access_control",
    dialect: process.env.DB_DIALECT || "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
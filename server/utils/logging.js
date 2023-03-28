const winston = require("winston");

module.exports = function () {
    winston.exceptions.handle(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: "8i_access_control_api.log" })
    );
    process.on("unhandledRejection", (ex) => {
        throw ex;
    });
};
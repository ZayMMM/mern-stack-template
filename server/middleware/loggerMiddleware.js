const express = require('express');
const { createLogger, format, transports } = require('winston');
const { combine, printf } = format;
const DailyRotateFile = require('winston-daily-rotate-file');

// Define log format
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});
const appLogger = express();

// Create a new logger instance with a file transport
const logger =  createLogger({
    format: combine(
        //format.colorize(),
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
    ),
    transports: [
        new transports.Console({
            level: 'debug',
            format: format.combine(
                myFormat
            )
        }),
        new DailyRotateFile({
            level: 'info',
            filename: '../logs/info-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            format: format.combine(
                myFormat
            )
        }),
        new DailyRotateFile({
            level: 'error',
            filename: '../logs/error-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            format: format.combine(
                myFormat
            )
        })
    ]
});

// Middleware function to log incoming requests
appLogger.use((req, res, next) => {
    logger.info('REQUEST: ' + `${req.method} ${req.path}`);
    next();
});

// Middleware function to log outgoing responses
appLogger.use((req, res, next) => {
    const originalSend = res.send;
    res.send = function (body) {
        logger.info('RESPONSE: ' + `${res.statusCode} ${req.method} ${req.path}`);
        originalSend.call(this, body);
    };
    next();
});


module.exports = appLogger;
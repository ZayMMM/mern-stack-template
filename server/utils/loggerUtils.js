const { createLogger, format, transports } = require('winston');
const { combine } = format;
const DailyRotateFile = require('winston-daily-rotate-file');

// Create a new logger instance with a file transport
exports.logger = createLogger({
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
                format.timestamp(),
                format.json()
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
                format.timestamp(),
                format.json()
            )
        })
    ]
});
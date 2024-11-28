const winston = require('winston');
const path = require('path');

// Create logger instance
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.splat(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.colorize(),
        winston.format.printf((log) => {
            if (log.stack) {
                return `[${log.timestamp}] [${log.level}] ${log.stack}`;
            }
            return `[${log.timestamp}] [${log.level}] ${log.message}`;
        }),
    ),
    transports: [
        // Console transport
        new winston.transports.Console(),
        // File transport (only logs error level and higher)
        new winston.transports.File({
            level: 'error',
            filename: path.join(__dirname, 'errors.log'),
        }),
    ],
});

// Export logger for use in other parts of the app
module.exports = logger;

import path from 'path';
import DailyRotateFile from 'winston-daily-rotate-file';
import { createLogger, format, transports } from 'winston';
import config from '../../src/config/index';
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `
    {
        date: ${date.toDateString()} ${hours}:${minutes}:${seconds},
        label: [${label}],
        level: ${level},
        message: ${message}       
    }
    `;
});

const logger = createLogger({
  format: combine(
    label({ label: 'university_project!' }),
    timestamp(),
    myFormat
    // prettyPrint()
  ),
  transports: [
    config.node_env === 'development'
      ? new transports.Console()
      : new DailyRotateFile({
          filename: path.join(
            process.cwd(),
            'logs',
            'winston',
            'successes',
            'up-%DATE%-success.log'
          ),
          datePattern: 'YYYY-DD-MM-HH',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
        }),
  ],
});
const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'university_project!' }),
    timestamp(),
    myFormat
    // prettyPrint()
  ),
  transports: [
    config.node_env === 'development'
      ? new transports.Console()
      : new DailyRotateFile({
          filename: path.join(
            process.cwd(),
            'logs',
            'winston',
            'errors',
            'up-%DATE%-error.log'
          ),
          datePattern: 'YYYY-DD-MM-HH',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
        }),
  ],
});

export { logger, errorLogger };

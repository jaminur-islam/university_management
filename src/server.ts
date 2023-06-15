import { app } from './app';
import config from '../src/config';
import { connectToDatabase } from '../src/config/dbConfig';
connectToDatabase();
import { Server } from 'http';
import { errorLogger } from './shared/logger';

process.on('uncaughtException', err => {
  console.log(`uncaughtException error ==>  ${err.message}`);
  err.message = `uncaughtException error ==>  ${err.message}`;
  errorLogger.error(err);
  process.exit(1);
});

let server: Server;

const bootstrap = async () => {
  await connectToDatabase();
  server = app.listen(config.port, async () => {
    console.log('Server listing port ', `http://localhost:${config.port}`);
  });

  process.on('unhandledRejection', err => {
    console.log('=== we are closing our server ===');
    errorLogger.error(err);
    if (server) {
      server.close(() => {
        errorLogger.error(err);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
};
bootstrap();

// process.on('SIGTERM', () => {
//   logger.info('SIGTERM RECEIVED');
//   if (server) {
//     server.close();
//   }
// });

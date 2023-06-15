import mongoose, { ConnectOptions } from 'mongoose';
import config from './index';
import { errorLogger, logger } from '../shared/logger';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      config.database_url as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    logger.info('Connected to MongoDB');

    // Event listeners for connection status
    mongoose.connection.on('connected', () => {
      logger.info('Mongoose connected to MongoDB');
    });

    mongoose.connection.on('error', err => {
      errorLogger.error('Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      errorLogger.error('Mongoose disconnected from MongoDB');
    });

    mongoose.connection.on('reconnected', () => {
      logger.info('MongoDB reconnected successfully');
    });

    process.on('SIGINT', () => {
      mongoose.connection
        .close()
        .then(() => {
          logger.info('Mongoose connection closed');
          process.exit(0);
        })
        .catch(err => {
          errorLogger.error('Mongoose connection error:', err);
          process.exit(1);
        });
    });
  } catch (error) {
    errorLogger.error('Error connecting to MongoDB:', error);
  }
};

export { connectToDatabase };

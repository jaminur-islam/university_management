import express, { Application } from 'express';
import cors from 'cors';
import {
  globalErrorHandler,
  routesNotFound,
} from './app/middleware/globalErrorHandler';
import { appRouters } from './app/routes/appRoutes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', appRouters);

app.use(routesNotFound);
app.use(globalErrorHandler);

export { app };

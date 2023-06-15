import express, { Application } from 'express';
import cors from 'cors';
import {
  globalErrorHandler,
  routesNotFound,
} from './app/middleware/globalErrorHandler';
import { appRouter } from './app/routes/appRoutes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', appRouter);

// app.use('/', async () => {
//   Promise.reject('Unhandled Promise Rejection eeee');
// });

// app.use('/', (req: Request, res: Response, next: NextFunction) => {
//     throw new Error('hi error khaisi')
//     // next('Ore baba re error')
// })

app.use(routesNotFound);
app.use(globalErrorHandler);

export { app };

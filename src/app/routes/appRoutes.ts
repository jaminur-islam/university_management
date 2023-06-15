import express from 'express';
import { userRouter } from '../modules/user/user.router';
import { semesterRouter } from '../modules/academicSemester/academicSemester.router';
const appRouter = express.Router();

appRouter.use('/user', userRouter);
appRouter.use('/academic-semester', semesterRouter);

export { appRouter };

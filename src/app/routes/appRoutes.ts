import express, { Router } from 'express';
import { userRouter } from '../modules/user/user.router';
import { semesterRouter } from '../modules/academicSemester/academicSemester.router';
const appRouters = express.Router();

const routerList: { path: string; router: Router }[] = [
  {
    path: '/user',
    router: userRouter,
  },
  {
    path: '/academic-semester',
    router: semesterRouter,
  },
];

routerList.forEach(router => {
  appRouters.use(router.path, router.router);
});

export { appRouters };

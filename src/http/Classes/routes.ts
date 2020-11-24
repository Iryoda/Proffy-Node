import {Router} from 'express';
import ClassesController from './ClassesController';

const classController = new ClassesController();
const classesRouter = Router();

classesRouter.post('/', classController.create);
classesRouter.get('/',  classController.index);
classesRouter.get('/time',  classController.findByTime);
classesRouter.get('/subject',  classController.findBySubject);
classesRouter.get('/weekday',  classController.findByWeekday);

export default classesRouter;
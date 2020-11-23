import {Router} from 'express';
import ClassesController from './ClassesController';

const classController = new ClassesController();
const classesRouter = Router();

classesRouter.post('/', classController.create);
classesRouter.get('/',  classController.index);

export default classesRouter;
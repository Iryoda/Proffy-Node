import {Router} from 'express';

import UserController from '../controllers/UserController';

const UsersController = new UserController();

const userRouter = Router()

userRouter.get('/', UsersController.index);

userRouter.post('/', UsersController.create);

export default userRouter;
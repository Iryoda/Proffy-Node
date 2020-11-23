import {Router} from 'express';
import ConnectionsController from './ConnectionsController';

const connectionsRouter = Router();

const connectionsController = new ConnectionsController;
connectionsRouter.post('/', connectionsController.create);
connectionsRouter.get('/', connectionsController.index);

export default connectionsRouter;
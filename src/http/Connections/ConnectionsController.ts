import {Request, Response} from 'express';

import CountConnectionService from '../../useCases/Connections/services/CountConnectionsService';
import CreateConnectionService from '../../useCases/Connections/services/CreateConnectionService';



export default class ConnectionsController{

    async index(request: Request, response: Response){
       
        try{
            const countConnections = new CountConnectionService();

            const total = await countConnections.execute();
            return response.json(total);
            
        }catch(err) {
            return response.sendStatus(400).json({
                erro: err.message
            });
        }
    }

    async create(request: Request, response: Response){
        const {user_id} = request.body;
        
        try {
            const createConnections = new CreateConnectionService();

            const create = await createConnections.execute(user_id);
            return response.sendStatus(200).json({"OK!": "Tudo Certo"});

        } catch (err) {
            return response.sendStatus(400).json({
                erro: err.message
            });
        }
    };
};
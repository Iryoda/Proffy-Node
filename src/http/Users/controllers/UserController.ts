import UserRepository from '../../../useCases/User/repositories/UserRepository';
import CreateUserService from '../../../useCases/User/service/CreateUsersService';
import {Request, Response} from 'express';
import {getCustomRepository} from 'typeorm';


export default class UserController {
    async index(request: Request, response: Response){
        const filter = request.query;

        try {
            const userRepository = getCustomRepository(UserRepository);
            
            if (filter){
                const users = await userRepository.findByName(filter.name as string);
                return response.json(users);
            }
            
            const users = await userRepository.find()
            return response.json(users);
        
        } catch (err) {
            return response.json({
                error: err.message,

            })
        }
    }

    async create (request: Request, response: Response){
        const {name, avatar, whatsapp, bio} = request.body;
        
        try {   
            const createUser = new CreateUserService();
            const user = await createUser.execute({name, avatar, whatsapp, bio})
            return response.json(user);

        } catch (err) { 
            return response.sendStatus(400).json({error: `error: ${err}`})
        };
            
        }
    }



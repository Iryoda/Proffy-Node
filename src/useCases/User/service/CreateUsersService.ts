import {getCustomRepository} from 'typeorm';
import User from '../entities/User';
import { CreateUserDTO } from '../repositories/IUserRepository';

import UserRepository from '../repositories/UserRepository';

export default class CreateUserService {
    public async execute ({name, avatar,whatsapp, bio}: CreateUserDTO) : Promise<User>{
        const userRepository = getCustomRepository(UserRepository);
        const user = userRepository.create({name, avatar,whatsapp, bio});
        await userRepository.save(user);

        return user;
    
    }
}
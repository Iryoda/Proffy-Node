import { getCustomRepository } from 'typeorm';

import ConnectionRepository from '../repositories/ConnectionsRepository';

export default class CountConnectionService
{
    public async execute(): Promise<string | number>{
        const Repository = getCustomRepository(ConnectionRepository);
        const number = Repository.count();
        return number;
    }

}
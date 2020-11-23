import {  getCustomRepository } from 'typeorm';
import ConnectionRepository from '../repositories/ConnectionsRepository';
import Connections from '../entities/entity';

export default class CreateConnectionService
{
    public async execute(user_id: string): Promise<Connections | null>{
        const connectionRep = getCustomRepository(ConnectionRepository);
        const connection = connectionRep.create({user_id});
        await connectionRep.save(connection);

        return connection;
    };
}
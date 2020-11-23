import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import Connections from '../entities/entity';


@EntityRepository(Connections)

class ConnectionRepository extends Repository<Connections>{
};

export default ConnectionRepository; 
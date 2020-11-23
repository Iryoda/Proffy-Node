import { getCustomRepository } from 'typeorm';

import UserRepository from '../../useCases/User/repositories/UserRepository';
import ScheduleRepository from '../../useCases/Schedule/repostitories/ScheduleRepository';

import ConnectionRepository from "../../useCases/Connections/repositories/ConnectionsRepository";
import ClassRepository from '../../useCases/Classes/repositories/ClassesRepository';


export const connectionsRepository = new ConnectionRepository();
export const usersRepository = new UserRepository();
export const classesRepository = new ClassRepository();
export const scheduleRepository = new ScheduleRepository();


import { classesRepository } from '../../shared/container/index';

import CreateClassService from '../../useCases/Classes/services/CreateClassServices';
import ListClassService from '../../useCases/Classes/services/ListClassService';
import {Request, Response} from 'express';
import { getCustomRepository } from 'typeorm';
import ClassRepository from '../../useCases/Classes/repositories/ClassesRepository';

export default class ClassesController{

    async index(request: Request, response: Response){
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        try{
            const listClasses = new ListClassService();

            const classes = await listClasses.execute({
                week_day,
                subject,
                time
            });
            
            return response.json(classes);
        } catch (err){
            return response.send(400).json({
                error: err.message
            });
        }
    }
    
    async create(request: Request, response: Response){
        const {
            name, 
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

    
        try{
            const createClass = new CreateClassService();

            const class_id = await createClass.execute(
                { name, avatar, whatsapp, bio, subject, cost, schedule }
            ); 
            return response.status(201).json(class_id);
    
        } catch (err) {
    
            return response.status(400).json({
                error: err
            });
        }
    
    };
} 
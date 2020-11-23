
import { getCustomRepository } from "typeorm";
import convertHourToMinutes from "../../../shared/utils/convertHourToMinutes";
import Class from "../../Connections/entities/entity";

import ClassRepository from "../repositories/ClassesRepository";

interface RequestBody{
    week_day: string;
    time: string;
    subject: string;
}


export default class ListClassService{

    public async execute({week_day, subject, time} : RequestBody) : Promise<Class[] | null>{
        const classesRepository = getCustomRepository(ClassRepository);
        
        if(!week_day || !subject || !time) 
        {
            throw Error('Missing filters to search classes');
        }

        const timeInMinutes = convertHourToMinutes(time);


        const class_subject = await classesRepository.filterBySubject(subject);

        const class_schedule = await classesRepository.filterByTime(timeInMinutes);

        const class_week_day = await classesRepository.filterByWeekday(week_day);

        if( class_schedule == null || class_subject == null || class_week_day == null){
            return null;
        }
        
        const intersection_classes_filtered = class_subject.filter(clas1 => {
            const in_array_1 = class_schedule.filter(clas2 => clas1.id == clas2.id) 
            const in_array_2 = class_week_day.filter(clas2 => clas1.id == clas2.id) 
            return in_array_1.length /*&& in_array_2.length*/;
        });
        
        return intersection_classes_filtered || null;;
    }
    
}


/*
    constructor( classesRepository: ClassesInterface){
        this.classesRepository = classesRepository;
    }

    public async execute({week_day, subject, time} : RequestBody){

        if(!week_day || !subject || !time) 
        {
            throw Error('Missing filters to search classes');
        }

        const timeInMinutes = convertHourToMinutes(time);

        //Filtrar Calsses por subject
        const class_subject: Classes[] = await this.classesRepository.filterBySubject(subject);

        const class_schedule: Classes[] = await this.classesRepository.filterByTime(time);

        const class_week_day: Classes[] = await this.classesRepository.filterByWeekday(week_day);
        
        const intersection_classes_filtered = class_subject.filter(clas1 => {
            const in_array_1= class_week_day.filter(clas2 => clas1.id == clas2.id)
            const in_array_2 = class_schedule.filter(clas2 => clas1.id == clas2.id)
            return in_array_1.length ;
        });

        return intersection_classes_filtered;
    
    }
}

*/
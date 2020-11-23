import Class from "../entities/entity";

import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Class)

export default class ClassRepository extends Repository<Class>{

    public async filterByWeekday(week_day: string): Promise<Class[] | null>{
        const searchedByWeekday = await this.find({
            where:{week_day}
        });

        return searchedByWeekday || null;
    }

    public async filterByTime(time: number): Promise<Class[] | null>{
        const searchedByWeekday = await this.find({
            where:{time}
        });

        return searchedByWeekday || null;
    }

    public async  filterBySubject(subject: string): Promise<Class[] | null>{
        const searchedByWeekday = await this.find({
            where:{subject}
        });

        return searchedByWeekday || null;
    }
}


/*
    async filterByWeekday(week_day: string): Promise<Class[] | null>
    {
        const classes = await db('classes')
        .whereExists(function(){
            this.select('schedule.*')
                .from('schedule')
                .whereRaw('`schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`schedule`.`week_day` = ??', [Number(week_day)])

        })
        .join('users', 'classes.user_id', '=', 'users.id')
        .select(['classes.*', 'users.*']);

        return classes;
    };  
    
    async filterByTime(timeInMinutes: string): Promise<Class[] | null>
    {
        const classes = await db('classes')
        .whereExists(function(){
            this.select('schedule.*')
                .from('schedule')
                .whereRaw('`schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`schedule`.`from` <= ??', [timeInMinutes])
                .whereRaw('`schedule`.`to` > ??', [timeInMinutes]);
        })
        .join('users', 'classes.user_id', '=', 'users.id')
        .select(['classes.*', 'users.*']);

        return classes;
    };

    async filterBySubject(subject: string) : Promise<Class[] | null>
    {
        const classes = await db('clasees')
        .where('classes.subject', '=', subject)
        .join('user', 'classes.user_id', '=', 'user.id' )
        .select(['classes.*', 'users.*']);

        return classes;
    }
} 
*/
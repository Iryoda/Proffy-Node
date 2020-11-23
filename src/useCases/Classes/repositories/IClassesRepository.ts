export interface CreateClassesDTO{
    subject: string;
    cost: number;
    user_id: string;
}


export interface ClassesInterface {

    create(data: CreateClassesDTO) : Promise<any>;
    filterByWeekday(week_day: string): Promise<any>;
    filterByTime(timeInMinutes: string): Promise<any>;
    filterBySubject(subject: string): Promise<any>; 
}


export interface CreateScheduleDTO{
    week_day: number;
    from: number;
    to: number;
    class_id: string;

}

export interface CreateScheduleRequestBody{
    week_day: number;
    from: string;
    to: string;
    class_id: string;

}


export interface IScheduleRepository{
    create(schedule: CreateScheduleDTO): Promise<any>;
}
import { getCustomRepository } from "typeorm";
import Schedule from "../entities/entity";
import { CreateScheduleDTO } from "../repostitories/ISchedulteRepository";
import ScheduleRepository from "../repostitories/ScheduleRepository";

export default class CreateScheduleService{
    public async execute({ 
        class_id,
        week_day,
        from,
        to,} : CreateScheduleDTO) : Promise<Schedule>{

            const scheduleRepository = getCustomRepository(ScheduleRepository);
            const schedule = scheduleRepository.create({ week_day, from, to, class_id});
            await scheduleRepository.save(schedule);

            return schedule;
        }
}
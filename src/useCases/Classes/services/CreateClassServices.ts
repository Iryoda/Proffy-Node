import { getCustomRepository, Repository } from "typeorm";

import ClassRepository from "../repositories/ClassesRepository";
import Schedule from "../../Schedule/entities/entity";


import CreateUserService from "../../User/service/CreateUsersService";
import CreateScheduleService from "../../Schedule/services/CreateSchedule";

import ScheduleRepository from "../../Schedule/repostitories/ScheduleRepository";
import convertHourToMinutes from "../../../shared/utils/convertHourToMinutes";
import { CreateScheduleRequestBody } from "../../Schedule/repostitories/ISchedulteRepository";

interface RequestBody{
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string,
    subject: string,
    cost: number,
    schedule: Schedule[]
}

export default class CreateClassService{

    public async execute({
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule,
    } : RequestBody)
    {
        //Criar Usuario
        const CreateUser = new CreateUserService();
        const newUser = await CreateUser.execute({ name, avatar, whatsapp, bio });
        const user_id = newUser.id;
        
        console.log(user_id);

        //Criar Classes
        const classesRepository = getCustomRepository(ClassRepository);
        const classesCreated = classesRepository.create({subject, cost, user_id});
        await classesRepository.save(classesCreated);
    
        const classID = classesCreated.id;
        console.log(classID);

        //Tratar as infos

        const scheduleRepository = getCustomRepository(ScheduleRepository);

        const classSchedule = schedule.map((scheduleItem: CreateScheduleRequestBody) => {
            const from_f = convertHourToMinutes(scheduleItem.from);
            const to_f = convertHourToMinutes(scheduleItem.to)
            return scheduleRepository.create({
                class_id: classID,
                week_day: scheduleItem.week_day,
                from: from_f,
                to: to_f });
            });
 
        await scheduleRepository.save(classSchedule);

        return classesCreated;
    }
}


import { EntityRepository, Repository } from "typeorm";

import Schedule from "../entities/entity";

@EntityRepository(Schedule)

export default class ScheduleRepository extends Repository<Schedule>{}

// export default class ScheduleRepository{
//     async create(schedule: CreateScheduleDTO) : Promise<any>{
//         const trx = await db.transaction();
//         const newSchedule = new schedule;
//         await trx('class_schedule').insert(newSchedule);
//     }
// }
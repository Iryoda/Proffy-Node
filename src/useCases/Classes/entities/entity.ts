import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Schedule from '../../Schedule/entities/entity';

@Entity('classes')

export default class Class {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    subject: string;

    @Column()
    cost: number;

    @Column()
    user_id: string;

    @OneToMany(()=>Schedule, (schedule: Schedule)=> schedule.classes, {onDelete: "CASCADE", onUpdate:"CASCADE"})
    schedules: Schedule[];
    
}

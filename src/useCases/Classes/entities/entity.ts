import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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

    // @OneToMany(()=>Schedule, (schedule: Schedule)=> schedule.class_id, {onDelete: "CASCADE", onUpdate:"CASCADE"})
    // schedule: Schedule[];
    
}

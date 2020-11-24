import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Class from '../../Classes/entities/entity';

@Entity('schedules')

export default class Schedule {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    week_day: number;

    @Column()
    from: number;

    @Column()
    to: number;


    @ManyToOne(()=> Class, classes => classes.schedules)
    @JoinColumn({name: "class_id"})
    classes: Class;
    
}


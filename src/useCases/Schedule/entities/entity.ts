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

    @Column()
    class_id: string;

    // @ManyToOne(()=> Class, (classes: Class) => classes.id)
    // @JoinColumn({name: 'class_id'})
    // class: Class;
    
}


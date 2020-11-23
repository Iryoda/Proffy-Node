import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')

export default class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    avatar: string;

    @Column()
    whatsapp: string;

    @Column()
    bio: string;

}
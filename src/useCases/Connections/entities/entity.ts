import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('connectionsDB')

export default class Connections{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    create_at: Date;

    
}


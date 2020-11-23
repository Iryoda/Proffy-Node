import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateConnections1606069300271 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'connectionsDB',
                columns:[{
                    name: "id",
                    type: "varchar",
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                    
                },
                {
                    name: "user_id",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "create_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                    isNullable: false,
                }
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('connectionsDB');
    }

}

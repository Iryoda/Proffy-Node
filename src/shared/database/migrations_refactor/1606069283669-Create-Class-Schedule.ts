import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClassSchedule1606069283669 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

        await queryRunner.createTable(
            new Table({
                name: "schedules",
                columns:[{
                    name: "id",
                    type: "varchar",
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()",
                },
                {
                    name: "week_day",
                    type: "integer",
                    isNullable: false,
                }, 
                {
                    name: "from",
                    type: "integer",
                    isNullable: false,
                },
                {
                    name: "to",
                    type: "integer",
                    isNullable: false,
                },
                {
                    name: "class_id",
                    type: "varchar",
                    isNullable: false,
                }, 
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("schedules");
    }

}

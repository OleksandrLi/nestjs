import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaSync1690212135223 implements MigrationInterface {
    name = 'SchemaSync1690212135223'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flavor" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flavor" DROP COLUMN "description"`);
    }

}

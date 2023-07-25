import { MigrationInterface, QueryRunner } from 'typeorm';

export class Flavor1690211998445 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "flavor" RENAME COLUMN "name" TO "title"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "flavor" RENAME COLUMN "title" TO "name"`,
    );
  }
}

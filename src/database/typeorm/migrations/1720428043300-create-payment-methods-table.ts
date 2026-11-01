import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePaymentMethodsTable1720428043300 implements MigrationInterface {
    name = 'CreatePaymentMethodsTable1720428043300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "payment_methods" (
                "id" SERIAL PRIMARY KEY,
                "name" varchar,
                "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS payment_methods;
        `);
    }
}
// gia tri cua file nay la dung de tao bang payment_methods trong database, bao gom cac cot id, name, created_at va updated_at. id la primary key va tu dong tang gia tri.
// name la mot chuoi ky tu. created_at va updated_at la cac cot luu tru thoi gian tao va cap nhat cua ban ghi.

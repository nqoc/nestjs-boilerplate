import { MigrationInterface, QueryRunner } from 'typeorm';

export class createMediaTable1699973814239 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS media (
            id SERIAL NOT NULL, 
            public_id varchar(255), 
            url varchar(255), 
            PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS media');
  }
}


// file nay la file dung de tao bang media trong database, bao gom cac cot id, public_id va url. id la primary key va tu dong tang gia tri. 
// public_id la mot chuoi ky tu co do dai toi da 255 ky tu. url la mot chuoi ky tu co do dai toi da 255 ky tu.
import {
  // import cac thu vien can thiet de tao entity trong TypeORM. entity la mot class dung de khai bao mot bang trong database, bao gom cac cot va quan he giua cac bang. PrimaryGeneratedColumn la mot decorator dung de khai bao mot cot la primary key va tu dong tang gia tri. Column la mot decorator dung de khai bao mot cot trong bang. CreateDateColumn, UpdateDateColumn va DeleteDateColumn la cac decorator dung de khai bao cac cot tu dong luu tru thoi gian tao, cap nhat va xoa cua ban ghi
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 }) // title la mot chuoi ky tu co do dai toi da 255 ky tu
  title: string;

  @Column({ type: 'varchar', length: 255 }) // category la mot chuoi ky tu co do dai toi da 255 ky tu
  category: string;

  @Column({ type: 'text' }) // description la mot chuoi ky tu co do dai khong gioi han, dung de luu tru mo ta cua bai viet
  description: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' }) /// la 1 dong luu tru thoi gian dang tai
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' }) // la 1 dong luu tru thoi gian cap nhat
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp with time zone',
    nullable: true,
  })
  deletedAt: Date | null;
}

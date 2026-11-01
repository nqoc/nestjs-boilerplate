import {
  // import cac thu vien can thiet de tao entity trong TypeORM. entity la mot class dung de khai bao mot bang trong database, bao gom cac cot va quan he giua cac bang. PrimaryGeneratedColumn la mot decorator dung de khai bao mot cot la primary key va tu dong tang gia tri. Column la mot decorator dung de khai bao mot cot trong bang. ManyToOne la mot decorator dung de khai bao quan he nhieu-mot giua hai bang. CreateDateColumn, UpdateDateColumn va DeleteDateColumn la cac decorator dung de khai bao cac cot tu dong luu tru thoi gian tao, cap nhat va xoa cua ban ghi
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';

@Entity('order_details')
export class OrderDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.order_details)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Product, (product) => product.order_details)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  amount: number;

  @Column('double precision')
  price: number;

  @Column('timestamp with time zone', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;

  @Column('timestamp with time zone', {
    name: 'updated_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date | null;
}

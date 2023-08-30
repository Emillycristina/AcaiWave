import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from './Order.entity';

@Entity({ name: 'customers' })
export class Customer {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id: number;

  @Column()
  name?: string;

  @Column()
  phone?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @OneToOne(() => Order, (order: Order) => order.customer)
  order: Order;
}

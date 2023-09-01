import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from './Customer.entity';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id: number;

  @Column()
  number_order?: number;

  @Column({ type: 'json' })
  size_order?: any;

  @Column({ type: 'json' })
  options?: any;

  @Column({ nullable: true })
  customer_id: number;

  @Column({ default: 'Solicitado' })
  status: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @OneToOne(() => Customer, (customer) => customer.order)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}

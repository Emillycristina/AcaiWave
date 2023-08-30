import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from 'src/controllers/Customers.controller';

import { Customer } from 'src/entities/Customer.entity';
import { CustomerService } from 'src/services/customer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomersController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomersModule {}

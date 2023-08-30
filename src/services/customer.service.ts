import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerDto } from 'src/DTO/customer/create-customer.dto';
import { UpdateCustomerDto } from 'src/DTO/customer/update-customer.dto';
import { Customer } from 'src/entities/Customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    return this.customersRepository.save(createCustomerDto);
  }

  async findAll() {
    return this.customersRepository.find();
  }

  async findOne(id: number) {
    await this.exists(id);
    return this.customersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, { name, phone }: UpdateCustomerDto) {
    await this.exists(id);

    const data: any = {};

    if (name) {
      data.name = name;
    }
    if (phone) {
      data.phone = phone;
    }

    await this.customersRepository.update(id, data);

    return this.findOne(id);
  }

  async remove(id: number) {
    await this.exists(id);
    return this.customersRepository.delete(id);
  }

  async exists(id: number) {
    if (
      !(await this.customersRepository.exist({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`O pedido ${id} não existe`);
    }
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from 'src/DTO/order/create-order.dto';
import { UpdateOrderDto } from 'src/DTO/order/update-order.dto';
import { Order } from 'src/entities/Order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
  ) {}

  async create({ options, status, customer_id }: CreateOrderDto) {
    const data: any = {};
    data.number_order = Math.floor(Math.random() * 1000 + 1);

    if (options) {
      data.options = Array(options);
    }
    if (status) {
      data.status = status;
    }
    if (customer_id) {
      data.customer_id = Number(customer_id);
    }

    await this.ordersRepository.save(data);
    return data;
  }

  async findAll() {
    return this.ordersRepository.find();
  }

  async findOne(id: number) {
    await this.exists(id);
    return this.ordersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, { options, status }: UpdateOrderDto) {
    await this.exists(id);

    const data: any = {};

    if (options) {
      data.options = Array(options);
    }
    if (status) {
      data.status = status;
    }

    await this.ordersRepository.update(id, data);

    return this.findOne(id);
  }

  async remove(id: number) {
    await this.exists(id);
    return this.ordersRepository.delete(id);
  }

  async exists(id: number) {
    if (
      !(await this.ordersRepository.exist({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`O pedido ${id} não existe`);
    }
  }
}

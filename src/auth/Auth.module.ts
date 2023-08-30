import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './Auth.controller';
import { AuthService } from './Auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/modules/users.module';
import { User } from 'src/entities/User.entity';
import { OrdersModule } from 'src/modules/orders.module';
import { CustomersModule } from 'src/modules/customers.module';

@Module({
  imports: [
    JwtModule.register({
      secret: String(process.env.JWT_SECRET),
    }),
    forwardRef(() => UsersModule),
    forwardRef(() => OrdersModule),
    forwardRef(() => CustomersModule),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}

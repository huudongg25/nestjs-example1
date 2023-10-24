import { Module } from '@nestjs/common';
import { UserController } from './user.contoller';
import { UserService } from './user.service';
import { UsersRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entity/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Users])],
  controllers: [UserController],
  providers: [UserService, UsersRepository],
})
export class UserModule {}

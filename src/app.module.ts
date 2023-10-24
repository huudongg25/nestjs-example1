import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { ProductModule } from './module/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './module/user/entity/user.entity';

@Module({
  imports: [UserModule, ProductModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'password',
    database: 'learnOrm',
    port:3306,
    entities: [Users],
    synchronize: false,
  }),],
})
export class AppModule { }

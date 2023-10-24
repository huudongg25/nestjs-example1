import { Injectable } from '@nestjs/common';

import { IUser } from './types/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    public userRepository: Repository<Users>
  ) {
    //Service is creating its own dependencies
    //Không nên làm như thế này
  }
  findOne(id: number) {
    // xử lý logic ở đây
    return this.userRepository.findOneBy({ id });
  }

  findAll() {
    return this.userRepository.find()
  }

  async deleteId(id: number) {
    try {
      let user = await this.userRepository.findOneBy({ id })
      console.log(111, user)
      if (!user) {
        return { msg: "id not found" }
      }

      this.userRepository.delete(id)
      return { msg: "delete successfully" }
    } catch (error) {
      return error
    }
  }

  async create(data: UserDTO) {
    const user = {
      username: data.username,
      address: data.address,
      email: data.email,
    }
    try {
      this.userRepository.create(user)
      await this.userRepository.save(user)
      return { msg: "post successfully" }
    } catch (error) {
      console.log(error)
      return { msg: "post error" }
    }
  }
}

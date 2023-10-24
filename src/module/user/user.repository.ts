import { readFile, writeFile } from 'fs/promises';

import { Injectable } from '@nestjs/common';
import { IUser } from './types/user';

@Injectable()
export class UsersRepository {
  //dung de tuong tac voi database
  async findOne(id: string) {
    //đọc ra
    const contents = await readFile('src/module/user/user.json', 'utf-8');
    //convert về dạng javascript object
    const usersData = JSON.parse(contents);
    //đi tìm thông tin
    const data = usersData.find((user: any) => user._id == id);
    console.log('data', data);
    console.log('id', id);
    return {
      message: 'oke',
      user: data,
    };
  }
  
  async findAll() {
    const contents = await readFile('users.json', 'utf-8');
    const dataUsers = JSON.parse(contents);
    return {
      message: 'oke',
      users: dataUsers,
    };
  }
  async create(data: IUser) {
    const contents = await readFile('users.json', 'utf-8');
    const dataUsers = JSON.parse(contents);
    const id = Math.floor(Math.random() * 100);
    dataUsers[id] = { _id: id, data };
    await writeFile('users.json', JSON.stringify(dataUsers));
  }
}

import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseInterceptors,

  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('api/v1/users') //đây là router
export class UserController {
  constructor(public userService: UserService) {
    //DONT DO THIS ON REAL APP
    //USE DEPENDENCY INJECTION
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getAllUser() {
    return this.userService.findAll()
  }

  // @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() body: UserDTO) {
    return this.userService.create(body)
  }

  @Get("/search")
  searchProduct(@Query() query: any) {
    console.log("query", query)
    return query
  }

  //get
  @Get(':id')
  getUserById(@Param('id') id: number) {
    console.log('id', typeof id);
    try {
      return this.userService.findOne(id);
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }
  // create

  // put
  @Put(':id')
  editUser() { }
  //path
  @Patch('id')
  editUserById() { }

  //Delete
  @Delete(':id')
  removeUser(@Param("id") id: number) {
    return this.userService.deleteId(id)
  }

  @Get('*')
  notFound() {
    return 'Not Found';
  }
}

//decorator tìm hiểu
//tại sao lại không được làm cách trên
//nó liên quan tới 1 khái niệm => Inversion of Control

//cách giải quyết là dùng Depency Injection
//tại sao thằng Depecy Injection tồn tại

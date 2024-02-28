import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserInterface } from '../interface/user.interface';

@Controller('user')
export class UserController {
  constructor(private useService: UserService) {}

  @Get()
  async getAll(): Promise<UserInterface[]> {
    return this.useService.findAll();
  }

  @Get(':id')
  findUserById(@Param('id') id: string) {
    return this.useService.findUserById(id);
  }

  
}

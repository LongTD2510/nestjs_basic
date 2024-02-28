import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './service/user.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

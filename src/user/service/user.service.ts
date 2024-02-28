import { Injectable } from '@nestjs/common';
import { UserInterface } from '../interface/user.interface';

@Injectable()
export class UserService {
  private readonly userInterface: UserInterface[] = [
    { id: 1, name: 'test', age: 18 },
  ];

  findAll(): UserInterface[] {
    return this.userInterface;
  }

  findUserById(id: string) {
    return {
      data: [
        {
          id: 1,
          name: 'test',
          age: 18,
        },
        {
          id: 2,
          name: 'test1',
          age: 18,
        },
      ],
      findUserById: id,
    };
  }
}

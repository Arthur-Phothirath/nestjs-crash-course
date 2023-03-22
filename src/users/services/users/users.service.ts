import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'John Doe', email: 'John@gmail.com' },
    { username: 'Jane Doe', email: 'Jane@gmail.com' },
    { username: 'Bob Doe', email: 'Bob@gmail.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    return { id, username: 'John Doe', email: 'jon@gmail.com' };
  }
}

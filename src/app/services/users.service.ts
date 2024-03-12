import { Injectable } from '@angular/core';
import { User } from '../types/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [];

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.concat(user);
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

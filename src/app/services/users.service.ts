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

  setUsers(users: User[]): void {
    this.users = users;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

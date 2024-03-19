import { Injectable } from '@angular/core';
import { User } from '../../users/interface/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users: User[] = [];

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  editUser(updatedUser: User): void {
    const index = this.users.findIndex((user) => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
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

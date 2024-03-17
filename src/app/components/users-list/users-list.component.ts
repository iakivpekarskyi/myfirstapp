import { Component, Output } from '@angular/core';
import { UsersApiService } from '../../services/users-api.service';
import { User } from '../../types/users.interface';
import { UserCardComponent } from '../user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent, CommonModule, MatGridListModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  providers: [UsersApiService],
})
export class UsersListComponent {
  users: User[] = [];

  constructor(
    private usersApiService: UsersApiService,
    private usersService: UsersService
  ) {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.usersApiService.getUsers().subscribe((users) => {
      this.usersService.setUsers(users);
      this.updateLocalUsers();
    });
  }

  private updateLocalUsers(): void {
    this.users = this.usersService.getUsers();
  }

  deleteUser(userId: number): void {
    this.usersService.deleteUser(userId);
    this.updateLocalUsers();
  }
}

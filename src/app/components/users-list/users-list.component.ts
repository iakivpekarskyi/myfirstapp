import { Component } from '@angular/core';
import { UsersApiService } from '../../services/users-api.service';
import { User } from '../../types/users.interface';
import { UserCardComponent } from '../user-card/user-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent, CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  providers: [UsersApiService],
})
export class UsersListComponent {
  users: User[] = [];

  constructor(private usersApiService: UsersApiService) {
    this.usersApiService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}

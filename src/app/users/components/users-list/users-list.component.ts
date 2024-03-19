import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../interface/users.interface';

import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditUserModalComponent } from '../create-edit-user/create-edit-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UsersApiService } from '../../../core/services/users-api.service';
import { UsersService } from '../../../core/services/users.service';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    UserCardComponent,
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  @Output() addUserClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private usersApiService: UsersApiService,
    public usersService: UsersService,
    private dialog: MatDialog
  ) {
    this.fetchUsers();
  }

  onAddUserClick(): void {
    const dialogRef = this.dialog.open(CreateEditUserModalComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.usersService.addUser(result);
      }
    });
  }

  fetchUsers(): void {
    this.usersApiService.getUsers().subscribe((users) => {
      this.usersService.setUsers(users);
    });
  }

  deleteUser(userId: number): void {
    this.usersService.deleteUser(userId);
  }
}

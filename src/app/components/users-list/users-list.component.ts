import { Component, EventEmitter, Output } from '@angular/core';
import { UsersApiService } from '../../services/users-api.service';
import { User } from '../../types/users.interface';
import { UserCardComponent } from '../user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { AddUserButtonComponent } from '../buttons/add-user-button/add-user-button.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditUserModalComponent } from '../modal/create-edit-user-modal/create-edit-user-modal.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    UserCardComponent,
    CommonModule,
    MatGridListModule,
    AddUserButtonComponent,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  providers: [UsersApiService],
})
export class UsersListComponent {
  users: User[] = [];

  constructor(
    private usersApiService: UsersApiService,
    private usersService: UsersService,
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
        this.updateLocalUsers();
      }
    });
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

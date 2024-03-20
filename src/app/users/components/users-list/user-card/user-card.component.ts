import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../interface/users.interface';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditUserComponent } from '../../create-edit-user/create-edit-user.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  private _user!: User;

  @Input() set user(value: User) {
    this._user = value;
  }

  get user(): User {
    return this._user;
  }

  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
  @Output() editUser: EventEmitter<User> = new EventEmitter<User>();

  constructor(public dialog: MatDialog) {}

  openDialog(user?: User): void {
    const dialogRef = this.dialog.open(CreateEditUserComponent, {
      data: user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.editUser.emit(result);
      }
    });
  }

  onEditClick(): void {
    this.openDialog(this.user);
  }

  onDeleteClick(): void {
    this.deleteUser.emit(this.user.id);
  }
}

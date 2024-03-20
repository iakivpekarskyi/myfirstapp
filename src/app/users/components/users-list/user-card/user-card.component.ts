import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../interface/users.interface';
import { MatDialog } from '@angular/material/dialog';

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

  onEditClick(): void {
    this.editUser.emit(this.user);
  }

  onDeleteClick(): void {
    this.deleteUser.emit(this.user.id);
  }
}

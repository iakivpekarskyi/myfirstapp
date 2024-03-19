import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UsersService } from '../../../../core/services/users.service';
import { User } from '../../../constants/types/users.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() user: User;
  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();

  constructor(private userService: UsersService) {
    this.user = {} as User;
  }

  onDeleteClick(): void {
    this.deleteUser.emit(this.user.id);
  }
}

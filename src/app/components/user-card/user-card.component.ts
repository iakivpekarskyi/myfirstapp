import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../types/users.interface';
import { UsersService } from '../../services/users.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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

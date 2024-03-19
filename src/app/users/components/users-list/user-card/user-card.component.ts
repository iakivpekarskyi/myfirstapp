import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../interface/users.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input({ required: true }) user!: User;
  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();

  onDeleteClick(): void {
    this.deleteUser.emit(this.user.id);
  }
}

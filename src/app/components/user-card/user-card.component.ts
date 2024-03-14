import { Component, Input } from '@angular/core';
import { User } from '../../types/users.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() user: User;

  constructor() {
    this.user = {} as User;
  }
}

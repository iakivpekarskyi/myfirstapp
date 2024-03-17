import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-user-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './add-user-button.component.html',
  styleUrl: './add-user-button.component.scss',
})
export class AddUserButtonComponent {
  @Output() addUserClick: EventEmitter<void> = new EventEmitter<void>();

  onAddUserClick(): void {
    this.addUserClick.emit();
  }
}

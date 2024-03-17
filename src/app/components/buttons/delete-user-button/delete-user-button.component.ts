import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-user-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './delete-user-button.component.html',
  styleUrl: './delete-user-button.component.scss',
})
export class DeleteUserButtonComponent {
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  onDeleteClick(): void {
    this.delete.emit();
  }
}

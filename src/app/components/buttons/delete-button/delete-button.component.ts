import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss',
})
export class DeleteButtonComponent {
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  onDeleteClick(): void {
    this.delete.emit();
  }
}

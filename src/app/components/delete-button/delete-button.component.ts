import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss',
})
export class DeleteButtonComponent {
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  onDeleteClick(): void {
    this.delete.emit();
  }
}

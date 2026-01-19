import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comon-popup',
  imports: [
    CommonModule
  ],
  templateUrl: './comon-popup.html',
  styleUrl: './comon-popup.scss',
})
export class ComonPopup {

  @Input() visible = false;
  @Input() title = 'Confirm';
  @Input() message = 'Are you sure?';

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
